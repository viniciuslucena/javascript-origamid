const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS1',
        min: 25
    }
]
const duracaoAulas = aulas.reduce((acc, cur) => {
    return acc + cur.min
}, 0)
console.log(duracaoAulas)




const listaNumeros = [12, 43, 76, 23, 67, 1, 6]
const maiorNumero = listaNumeros.reduce((acc, cur) => {
    if (acc > cur) {
        return acc
    } else {
        return cur
    }
}, 0)
console.log(maiorNumero)




const frutas = ['Banana', 'Uva', 'Pêra']

const temUva = frutas.some((fruta) => {
    return fruta === 'Uva'
})
console.log('Some: ', temUva)

const every = frutas.every((fruta) => {
    return fruta === 'Uva'
})
console.log('Every: ', every)

function maiorQue100(numero) {
    return numero > 100
}

const numeros = [0, 43, 22, 88, 101, 2]
const temMaior = numeros.some(maiorQue100)
console.log('Some: ', temMaior)

const numerosLetras = [0, 1, 2, 3, 'a', 'b', 'casa']
const arrayLimpo = numerosLetras.filter((el) => {
    if (typeof el === 'number') {
        return el
    }
})

console.log(arrayLimpo)