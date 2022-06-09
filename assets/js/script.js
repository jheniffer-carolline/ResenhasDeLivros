let nome = window.document.getElementById ('nome')
let email = document.querySelector ('#email')
let assunto = document.querySelector ('#assunto')

/*
function validarNome () {
    if (nome.value.length < 3) {
        alert ('Nome inválido! Digite um nome com mais de 3 letras')
    }
}

function validarEmail () {
    if (email.value.indexOf ('@') ==-1) {
        alert ('Email inválido! Digite um email com @')
    }
}
*/

function validarNome() {
    let txtNome = document.querySelector ('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
    }
}

function validarEmail() {
    let txtEmail = document.querySelector ('#txtEmail')
    if (nome.value.length < 5) {
        txtEmail.innerHTML = 'Email Invalido'
        txtEmail.style.color = 'purple'
    } else {
        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'blue'
    }
}

