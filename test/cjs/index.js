const exported = require('node-require-import')
console.log(exported)
console.log(exported.hello())
const assert = require('assert')
assert.match(exported.hello(), /cjs/)