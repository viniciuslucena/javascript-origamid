// moto = {}
// carro = {}

// Object.defineProperties(moto, {
//     rodas: {
//         value: 2,
//         configurable: false,
//         enumerable: true,
//         writable: false
//     },
// })

// Object.defineProperties(carro, {
//     portas: {
//         get() {
//             return this._portas
//         },
//         set(valor) {
//             this._portas = valor * 4
//         }
//     }
// })

const carros = {
    marca: 'Ford',
    ano: 2018
}

// console.log(Object.keys(carros))
// console.log(Object.values(carros))
// console.log(Object.entries(carros))

// const frutas1 = ["Banana", "Maça", "Uva"]
// const frutas2 = ["Banana", "Maça", "Uva"]

// console.log(Object.is(frutas1, frutas2))

Object.freeze(carros)
Object.seal(carros)
Object.preventExtensions(carros)