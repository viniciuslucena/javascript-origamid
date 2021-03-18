const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39'
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99'
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49'
    },
]

let taxaTotal = 0
let recebimentoTotal = 0
transacoes.forEach((transacao) => {
    const numeroLimpo = +transacao.valor.replace('R$ ', '')
    if (transacao.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo
    } else {
        recebimentoTotal += numeroLimpo
    }
})

const transportes = 'Carro;Avião;Trem;Onibus;Bicicleta'
console.log(transportes.split(';'))

const html =
    `
    <ul>
        <li><span>Sobre</span></li>
        <li><span>Produtos</span></li>
        <li><span>Contato</span></li>
    </ul>
`
const html = html.split('span').join('a')

console.log(htmlJoin)

const frase = 'Melhor do ano!'
console.log(frase.slice(-1))

let totalTaxas = 0
const transacoes2 = ['Taxa do banco', '   TAXA DO PÃO', '  taxa do mercado', 'deposito bancario', 'TARIFA especial']
transacoes2.forEach((transacao) => {
    if (transacao.toLowerCase().trim().slice(0, 4) === 'taxa') {
        totalTaxas++
    }
})