const cursos = document.querySelectorAll('.curso')

const cursosArray = Array.from(cursos)
const objetoCursos = cursosArray.map((curso) => {

    const cursosTitulo = curso.querySelector('.curso h1').innerText
    const cursosDescricao = curso.querySelector('.curso p').innerText
    const cursosAulas = curso.querySelector('.aulas').innerText
    const cursosHoras = curso.querySelector('.horas').innerText

    return {
        titulo: cursosTitulo,
        descricao: cursosDescricao,
        aulas: cursosAulas,
        horas: cursosHoras,
    }
})

const numeros = [3, 44, 333, 23, 122, 322, 33]

const maioresQue100 = numeros.filter((numero) => {
    return numero > 100
})

console.log(maioresQue100)

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some(item => item === 'Baixo')
console.log(temBaixo)

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
]

const valorCompras = compras.reduce((acc, cur) => {
    const precoLimpo = +cur.preco.replace('R$', '').replace(',', '.').trim()
    return acc + precoLimpo
}, 0)

console.log(valorCompras)