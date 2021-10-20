const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

module.exports = yargs(hideBin(process.argv))
  .options({
    b: {
      alias: 'base',
      demandOption: true,
      type: 'number',
      describe: 'Es la base de la tabla de multiplicar'
    },
    l: {
      alias: 'list',
      demandOption: false,
      default: false,
      type: 'boolean',
      describe: 'Muestra la lista en consola'
    },
    h: {
      alias: 'hasta',
      demandOption: false,
      default: 10,
      type: 'number',
      describe: 'Limite de multiplicados'
    }
  })
  .check(argv => {
    if (isNaN(argv?.base)) {
      throw new Error('La --base debe ser un numero')
    }

    if (isNaN(argv?.hasta)) {
      throw new Error('La --hasta debe ser un numero')
    }

    return true
  })
  .argv
