const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')

const { base = 5, list } = argv

crearArchivo(base, list)
  .then(console.log)
  .catch(console.error)
