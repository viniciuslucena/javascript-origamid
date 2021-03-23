Number.isNaN(NaN) // Verifica se o número é NaN (Not a Number)
Number.isNaN(5 + 9)

Number.isInteger(20) // Verifica se é inteiro
Number.isInteger(19.95)

Number.parseFloat('99.50') // Transforma uma String em numero se for possível. A conversão é feita se a String começar com um número
parseFloat('99.50') // 99.5
parseFloat('99.50 reais') // 99.5
parseFloat('R$ 100') // NaN

parseInt('99.50', 10) // Segundo parametro é o Radix. 10 é para decimal
parseInt(3.14159470, 10) // 3
Number.parseInt('100 reais', 10) // 100

const preco = 2.99
preco.toFixed() // 3 | Arredonda baseado no valor decimal || toFixed retorna uma String
const carro = 1000.455
carro.toFixed(2) // 1000.46 | Argumento para dizer a quantidade de casas decimais
const preco2 = 2.50
preco2.toFixed() // 2 | .50 arredonda para baixo

    (99.99).toFixed() // 100 | Para passar numero direto precisa estar envolto de parenteses

let precoJogo = 199.99
precoJogo = precoJogo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

Math.abs(-5.5) // 5.5 | Transforma negativo em positivo
Math.ceil(4.8334) // 5 | Arrendonda para cima
Math.floor(4.8334) // 4 | Arredonda para baixo
Math.round(4.8334) // 5 | Arredonda para o número integral mais próximo -> .5 arredonda para cima

Math.max(1, 2, 3, 70, 23) // 70 | Retorna o maior número
Math.min(1, 2, 3, 70, 23) // 1 | Retorna o menor número

Math.random() // 0.XX || Numero aleatório entre 0 e 1
Math.floor(Math.random() * 100) // Numero aleatório entre 0 e 100
Math.floor(Math.random() * 500) // Numero aleatório entre 0 e 500

Math.floor(Math.random() * (72 - 32 + 1) + 32) // Numero aleatorio entre 72 e 32
Math.floor(Math.random() * (max - min + 1) + min) // Numero aleatorio entre 72 e 32