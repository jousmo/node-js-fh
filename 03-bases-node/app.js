const { crearArchivo } = require('./helpers/multiplicar')

console.clear()

const base = 5

crearArchivo(base)
  .then(console.log)
  .catch(console.error)
