var copasBrasil = [1959, 1962, 1970, 1994, 2002]

copasBrasil.forEach((ano) => {
    console.log(`O brasil ganhou a copa de ${ano}`)
}) 

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']
for(var i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    if(frutas[i] === 'Pera') {
        fruta = frutas[i]
        break
    }
}

ultimaFruta = frutas[4]
console.log(ultimaFruta)
console.log(frutas)