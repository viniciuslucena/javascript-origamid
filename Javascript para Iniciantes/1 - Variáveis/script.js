// Variáveis server para armazenar algo na memória
// Podem ser iniciadas com var, let ou const
var nome = 'Vinicius'
var idade = 25
var possuiFaculdade = false

console.log(nome, idade, possuiFaculdade, nome)

var preco = 25
var totalComprado = 5
var precoTotal = totalComprado * preco

console.log(precoTotal)

var sobrenome = 'Lucena', 
    cidade = 'Caruaru'

console.log(sobrenome, cidade)

// Pode declarar a variável e não atribuir valor (Ficará como undefined)
var semDefinir
console.log(semDefinir)


// HOISTING -> As variáveis são movidas para cima do código, porém seu valor não é movido
console.log(comida)
var comida = 'Pizza'

var comida
console.log(comida)
comida = 'Pizza'