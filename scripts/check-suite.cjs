const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
let count = 0
const errors = []
function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) { visit(file); continue }
    if (!file.endsWith('.js')) continue
    count++
    const source = fs.readFileSync(file, 'utf8')
    try { new vm.SourceTextModule(source, { identifier: file }) }
    catch (error) { errors.push(`${file}: ${error.message}`) }
    for (const match of source.matchAll(/(?:from\s*|require\s*\()\s*['"]([^'"]+)['"]/g)) {
      if (!match[1].startsWith('.')) continue
      const target = path.resolve(path.dirname(file), match[1])
      if (![target, `${target}.js`, `${target}.json`, path.join(target, 'index.js')].some(fs.existsSync)) {
        errors.push(`${file}: missing import ${match[1]}`)
      }
    }
    if (/^\s*(?:it|describe)\.only\(/m.test(source)) errors.push(`${file}: focused test`)
  }
}
visit('cypress')
console.log(`Checked ${count} Cypress JavaScript files.`)
errors.forEach(error => console.error(error))
process.exitCode = errors.length ? 1 : 0
