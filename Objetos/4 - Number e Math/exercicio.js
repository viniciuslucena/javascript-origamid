const numAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(numAleatorio)

const numeros = '4, 5, 20, 8, 9'
const numeroArray = numeros.split(', ')
console.log(Math.max(...numeroArray))

const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230', 'r$  200']

function limpaPreco(preco) {
    preco = +preco.toLowerCase().replace(',', '.').replace('r$', '').trim()
    preco = +preco.toFixed(2)
    return preco
}

let somaTotal = 0

listaPrecos.forEach((preco) => {
    somaTotal += limpaPreco(preco)
})

console.log(`Soma total: R$ ${somaTotal}`)
