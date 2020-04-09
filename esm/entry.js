import { sep } from 'path'
import getFileName from './getFileName.js'
const filename = getFileName()
const splitted = filename.split(sep)
const hello = () => `world from ${splitted[splitted.length - 2]}`
export default {
  hello
}
export { hello }