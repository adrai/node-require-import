import { sep } from 'path'
import getFileName from './getFileName.js'
const filename = getFileName()
const splitted = filename.split(sep)
const isCjs = splitted[splitted.length - 2] === 'cjs'
const hello = () => `world from ${isCjs ? 'cjs' : 'esm'}`
export default {
  hello
}
export { hello }