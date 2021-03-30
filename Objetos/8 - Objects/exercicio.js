const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acc, cur) => {
    return acc + cur.innerText.length
}, 0)

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null

    return elemento
}

const h1Titulo = criarElemento.bind(null, 'Atividade')