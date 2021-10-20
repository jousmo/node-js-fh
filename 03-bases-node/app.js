const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .options({
    b: {
      alias: 'base',
      demandOption: true,
      type: 'number'
    },
    l: {
      alias: 'list',
      demandOption: false,
      default: false,
      type: 'boolean'
    }
  })
  .check((argv, options) => {
    console.log('argv', argv)
    if (isNaN(argv?.base)) {
      throw new Error('La --base debe ser un numero')
    }
    return true
  })
  .argv

const { base = 5, list } = argv
const { crearArchivo } = require('./helpers/multiplicar')

crearArchivo(base, list)
  .then(console.log)
  .catch(console.error)
