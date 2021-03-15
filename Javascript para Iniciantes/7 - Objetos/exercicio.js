var dadosPessoais = {
    nome: 'Vinicius',
    sobrenome: 'Lucena',
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    },
}

console.log(dadosPessoais.nomeCompleto())

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000
console.log(carro.preco)

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            console.log('Auau')
        } else {
            console.log('Nada')
        }
    }
}