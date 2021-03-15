// Existem 7 tipos de dados, onde todos são primitivos com exceção dos Objetos
// -> Primitivos são dados imutáveis
var nome = 'Vinicius' // String
var idade = 25 // Number
var possuiFaculdade = false // Boolean
var time // undefined
var comida = null // Null
var simbolo = Symbol() // Symbol
var objeto = {} // Object

// Para conferir o tipo de dado bastar usar 'typeof'
console.log(typeof null)

var gols = 1000
var frase1 = 'Romário fez ' + gols + ' gols.'
var frase2 = `Romário fez ${gols} gols.`

console.log(frase1)
console.log(frase2)