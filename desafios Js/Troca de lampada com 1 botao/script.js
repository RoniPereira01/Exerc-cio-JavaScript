

let ligada = true; // Variável para armazenar o estado da lâmpada

function mudarLampada() {
  const text = document.getElementById("button");
  const imagem = document.querySelector("img");

  ligada = !ligada; // Alterna o estado da lâmpada

  if (ligada) {
    text.innerText = "Ligar";
    imagem.src = "./img/lamp_off.gif";
  } else {
    text.innerText = "Desligar ";
    imagem.src = "./img/lamp_on.gif";
  }
}
    

