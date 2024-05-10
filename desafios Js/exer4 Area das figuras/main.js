function circular(){
   let calcularCirculo = prompt("Passe o Raio:");
    let raio = calcularCirculo / (2 * Math.PI);

    alert(`o raio do circulo é ${raio}`)
}

function quadrado(){
   let altura = prompt("Passe a altura: ");
   let largura = prompt("Passe a largura:");
   let calcularQuadrado = largura * altura;

    alert(`Valor da area do quadrado ${calcularQuadrado}`)
}

function triangulo() {
let base = prompt("Digite a base:")
let alturaT =  prompt("Digite a altura:")
let area = (base*alturaT)/2


alert(`Area do triangulo é: ${area}`)
}

function trapezio() {
let baseMaior = prompt("Digite a base maior:")
let baseMenor =  prompt("Digite a base menor:")
let alturaTrapezio = prompt("Digite a altura:")

let area = parseFloat(((baseMaior*baseMenor)*alturaTrapezio)/2)

alert(`Area do trapezio é: ${area}`)
}