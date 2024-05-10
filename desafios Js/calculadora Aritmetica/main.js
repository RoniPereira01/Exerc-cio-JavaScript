let numero1 = parseFloat(prompt("Digite o primeiro numero:"))
let numero2 = parseFloat(prompt("Digite o  segundo numero:"))
let operacao = prompt("Qual formula deseja usar:(soma,subtracao,divisao,multiplicaçao)")

if(operacao == 'soma') {
  let resultado =  numero1 +numero2
  alert(resultado) 
}else if(operacao =='subtracao'){
    let resultado =  numero1 - numero2
    alert(resultado) 
}else if (operacao == 'divisao'){
    let resultado = numero1 / numero2
    alert(resultado) 
    }else if(operacao == 'mutiplicacao'){
      let  resultado = numero1 * numero2
      alert(resultado) 
    }else {
        alert ("invalido!")
    }


