const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']
const primeiraComida = comidas.shift()
const ultimaComida = comidas.pop()
comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']
estudantes.sort()
estudantes.reverse()
estudantes.includes('Joana')
estudantes.includes('Juliana')

let html =
    `
    <section>
        <div>Sobre</div>
        <div>Produtos</div>
        <div>Contato</div>
    </section>
`

html = html.split('section').join('ul').split('div').join('li')
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda']
const carrosCopia = carros.slice() // Copia o array
carros.pop()
console.log(carros, carrosCopia)