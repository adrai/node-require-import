'use strict';
const { sep } = require('path')
const getFileName = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('./getFileName.js'))
const filename = getFileName()
const splitted = filename.split(sep)
const hello = () => `world from ${splitted[splitted.length - 2]}`
module.exports = {
  hello
}
exports.hello = hello