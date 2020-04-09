import exported from 'node-require-import'
// import { hello } from 'node-require-import'
console.log(exported)
console.log(exported.hello())
import assert from 'assert'
assert.match(exported.hello(), /esm/)