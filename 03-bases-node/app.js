const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv
const { base = 5 } = argv
const { crearArchivo } = require('./helpers/multiplicar')

crearArchivo(base)
  .then(console.log)
  .catch(console.error)
