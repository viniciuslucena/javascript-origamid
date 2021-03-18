function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function () {
        console.log(this.nome + ' andou')
    }
}
const pessoa1 = new Pessoa('João', 20)
const pessoa2 = new Pessoa('Maria', 25)
const pessoa3 = new Pessoa('Bruno', 15)

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor)
    this.addClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
    }
    this.removeClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}
const li = new Dom('li')
