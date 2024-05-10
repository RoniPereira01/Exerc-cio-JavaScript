let primeiroNome = prompt("Digite seu primeiro nome:");
let sobreNome = prompt("Digite se Sobre Nome:");
let campoDeEstudo = prompt("digite seu Campo de estudo:");
let anoDeNacimento = prompt("Digite seu ano de nacimento:");


// console.log(primeiroNome,sobreNome,campoDeEstudo,anoDeNacimento)

let digiteAno = prompt("Digite o ano, para verificar cadastro:")

function mostrarNavegador(){

    if(parseInt(digiteAno) === parseInt(anoDeNacimento)){
        alert(`${primeiroNome} ${sobreNome}\n
        ${campoDeEstudo}\n
        ${anoDeNacimento}`)
    }else{
        alert("Usuario não encontrado!!")
    }
}

mostrarNavegador();