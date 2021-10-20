const fs = require('fs')

const crearArchivo = (base = 5, list) => {
  return new Promise((resolve, reject) => {
    let salida = ''

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`
    }

    fs.writeFile(`tabla-${base}.txt`, salida, err => {
      if (err) reject(err)

      if (list) {
        console.log('====================')
        console.log(`   Tabla del ${base}`)
        console.log('====================')
        console.log(salida)
      }

      resolve(`Se creo el archivo: tabla-${base}.txt`)
    })
  })
}

module.exports = {
  crearArchivo
}
