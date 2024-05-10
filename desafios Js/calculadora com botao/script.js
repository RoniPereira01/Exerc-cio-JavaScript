function calcular(){
    const valor1= parseInt(document.getElementById("valor1").value);
    const valor2= parseInt(document.getElementById("valor2").value);

    const operacao = document.getElementById("operacao").value;

    let resultado;

    if (isNaN(valor1) || isNaN(valor2)) {
      alert("Os valores inseridos não são números!");
      return;
  }

  switch (operacao) {
    case "soma":
      resultado = valor1 + valor2;
      break;
    case "subtração":
      resultado = valor1 - valor2;
      break;
    case "divisão":
      if (valor2 === 0) {
        alert("Não é possível dividir por zero!");
        return;
      }
      resultado = valor1 / valor2;
      break;
    case "multiplicação":
      resultado = valor1 * valor2;
      break;
    default:
      resultado = "Operação inválida";
  }
    alert("Resultado: " + resultado);
}