'use strict';
const getFileName = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('./getFileName.js'))
const filename = getFileName()
const splitted = filename.split(/\/|\\/)
const isCjs = splitted[splitted.length - 2] === 'cjs'
const hello = () => `world from ${isCjs ? 'cjs' : 'esm'}`
module.exports = {
  hello
}
exports.hello = hello