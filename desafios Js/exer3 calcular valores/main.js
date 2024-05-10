 function calcular(){
    let produto = prompt("Qual o nome do produto:");
    let valor = prompt("Qual o valor do produto");
    let valorDadoPagar = prompt("Qual o  valor dado para pagar:")

    let troco = valor - valorDadoPagar;

     alert(`Nome do produto: ${produto},
           Valor do produto: ${valor},
           Valor dado: ${valorDadoPagar}
           Valor de troco:  ${troco}`)

 }

