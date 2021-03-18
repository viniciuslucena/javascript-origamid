function Dom(seletorAtribuido) {
    this.element = function () {
        return document.querySelector(seletorAtribuido)
    }
    this.ativar = function (classe) {
        this.element().classList.add(classe)
    }
}

const ul = new Dom('ul')
const lastLi = new Dom('li:last-child')