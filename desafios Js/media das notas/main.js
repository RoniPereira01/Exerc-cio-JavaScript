let nome = prompt("Digite seu nome:")
let Ra = parseInt(prompt("Digite se Ra:"))
let NotaA1 = parseFloat(prompt("Digite sua nota A1:"))
let NotaA2 = parseFloat(prompt("Digite sua nota A2:"))
let FrequenciaAulas = parseFloat(prompt("Digite sua frequencia nas aulas:"))


    media =(NotaA1 + (2*NotaA2)) / 3

if(media >=5 || FrequenciaAulas > 75){
    alert("Aprovado")
}else if(media < 5 || FrequenciaAulas <= 75){
    alert("RE")
}else if(media <= 3 || FrequenciaAulas < 75){
    alert("Reprovado")
}else{
    alert ("Aluno reprovado por falta")
}







// mostrar o nome e dados do alunos apos completar a incriçao dos dados
