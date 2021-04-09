const cronometro = document.querySelector('.cronometro')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')

iniciar.addEventListener('click', handleStart)
pausar.addEventListener('click', handlePause)
pausar.addEventListener('dblclick', handleRestart)

let segundos = 1
let timer

function handleStart() {
    timer = setInterval(() => {
        cronometro.innerText = segundos++
    }, 1000)
    iniciar.setAttribute('disabled', '')
}

function handlePause() {
    iniciar.removeAttribute('disabled')
    clearInterval(timer)
}

function handleRestart() {
    cronometro.innerText = '0'
    segundos = 1
}
