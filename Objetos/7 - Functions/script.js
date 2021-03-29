const carros = ['Ford', 'Fiat', 'VW', 'Mazda']
const frutas = ['Banana', 'Maçã', 'Pêra']

carros.forEach.call((frutas), (item) => {
    console.log(item)
})

const numeros = [12, 5643, 645, 3422, 867, 423, 74634, 776]

console.log(Math.max.apply(null, numeros))