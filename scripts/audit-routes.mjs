import fs from "node:fs"
import path from "node:path"

const routeFiles = []
const sourceFiles = []
function walk(directory, collector) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) walk(file, collector)
    else if (/\.(tsx|ts)$/.test(entry.name)) collector.push(file)
  }
}
walk("app", sourceFiles)
walk("components", sourceFiles)
for (const file of sourceFiles) if (path.basename(file) === "page.tsx") routeFiles.push(file)

const routes = routeFiles.map((file) => {
  const route = "/" + path.relative("app", path.dirname(file)).replaceAll(path.sep, "/")
  return route === "/." ? "/" : route.replace(/\[\[?\.\.\.?.+?\]?\]/g, ":param").replace(/\[.+?\]/g, ":param")
})
const links = new Map()
const dynamicPrefixes = new Set()
for (const file of sourceFiles) {
  const content = fs.readFileSync(file, "utf8")
  for (const match of content.matchAll(/["'`](\/[^"'`]*?)\$\{/g)) dynamicPrefixes.add(match[1])
  for (const match of content.matchAll(/["'`](\/[^"'`$} ]*)/g)) {
    const target = match[1].split(/[?#]/)[0]
    if (target.startsWith("/api/") || target === "//" || target.startsWith("/_next/") || target === "/icon.svg" || target.endsWith("/")) continue
    if (!links.has(target)) links.set(target, [])
    links.get(target).push(file)
  }
}
const routeExists = (target) => routes.some((route) => route === target || (route.includes(":param") && target.startsWith(route.split(":param")[0])))
const broken = [...links].filter(([target]) => !routeExists(target))
const orphaned = routes.filter((route) => route !== "/" && ![...links.keys()].some((link) => link === route || (route.includes(":param") && link.startsWith(route.split(":param")[0]))) && ![...dynamicPrefixes].some((prefix) => route.startsWith(prefix)))
console.log(JSON.stringify({ routes: routes.sort(), links: [...links.keys()].sort(), broken: broken.map(([target, files]) => ({ target, files })), orphaned: orphaned.sort() }, null, 2))
if (broken.length) process.exitCode = 1
