const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')

const { base, list, hasta } = argv

crearArchivo({ base, list, hasta })
  .then(console.log)
  .catch(console.error)
