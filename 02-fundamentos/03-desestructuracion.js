const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  edad: 50,
  getNombre () {
    return `${this.nombre} ${this.apellido} ${this.poder}`
  }
}

const nombre = deadpool.nombre
const apellido = deadpool.apellido
const poder = deadpool.poder
const fullName = deadpool.getNombre()

console.log(nombre)
console.log(apellido)
console.log(poder)
console.log(fullName)

function imprimeHeroe ({ nombre, apellido, poder, edad = 0 }) {
  nombre = 'Jousmo'
  console.log(nombre, apellido, poder, edad)
}

imprimeHeroe(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman']

const h1 = heroes[0]
const h2 = heroes[1]
const h3 = heroes[2]

console.log(h1)
console.log(h2)
console.log(h3)

const [, , h31] = heroes

console.log(h31)
