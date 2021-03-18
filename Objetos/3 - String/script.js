// const comida = 'Pizza'
// const agua = new String('Agua')

// console.log(agua.length)

// const frase = 'A melhor comida'

// console.log(frase[frase.length - 1])
// console.log(frase.charAt(frase.length - 1))

// const frase = 'A melhor linguagem é '
// const linguagem = 'JavaScript'

// console.log('Concatenação com +', frase + linguagem)
// console.log('Concatenação com concat', frase.concat(linguagem, '!!'))

// const fruta = 'Banana'
// const listaFruta = 'Maça, Banana e Melancia'

// console.log('listaFruta tem fruta?', listaFruta.includes(fruta, 14)) // Procurando a partir de determinado índice
// console.log('fruta tem listaFruta?', fruta.includes(listaFruta))

// console.log('Começa com Ba', fruta.startsWith('Ba'))
// console.log('Termina com na', fruta.endsWith('na'))

// const transacao1 = 'Deposito de cliente'
// const transacao2 = 'Deposito de fornecedor'
// const transacao3 = 'Taxa de camisas'

// console.log(transacao1.slice(0, 3))

// const instrumento = 'Guitarra'

// console.log(instrumento.indexOf('r'))
// console.log(instrumento.lastIndexOf('r'))
// console.log(instrumento.indexOf('ta'))

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']

// listaPrecos.forEach((preco) => {
//     console.log(preco.padStart(10, '.'))
// })

// listaPrecos[0].padStart(10, '.')
// listaPrecos[0].padEnd(10, '.')

// const frase = 'Ta'

// console.log(frase.repeat(5))

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
// listaItens = listaItens.replace(/[ ]+/g, ', ')
// console.log(listaItens)

// const arrayLista = listaItens.split(', ')

// console.log(arrayLista)

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
// const htmlArray = htmlText.split('div') // Quebra onde foi passado como argumento
// const novoHtml = htmlArray.join('section') // Junta o array com o que foi passado no argumento

// console.log(htmlText)
// console.log(htmlArray)
// console.log(novoHtml)

// const valor = '  R$ 50,00  '
// console.log(valor)
// console.log(valor.trim()) // Remove os espaços no começo e no fim
// console.log(valor.trimStart()) // Remove os espaços do começo
// console.log(valor.trimEnd()) // Remove os espaços do final