let personagem1 = prompt("Escreva o nome do personagem 1:");
let poderPer1 = prompt("Digite o poder do personagem 1:");

let personagem2 = prompt("Digite o nome do personagem 2:");
let quantPontosVida = prompt("Digite quantidade vida do segundo persongem:");
let podeDefesa = prompt("Qual o poder de defesa:");
let escudo = prompt("Possui escudo: 'Sim' 'Nao' ");



if (poderPer1 > podeDefesa && escudo == 'Nao'){
let danoCausado = podeDefesa-poderPer1;
alert("Dano causado:" + danoCausado)
}else if(poderPer1 > podeDefesa && escudo == 'Sim'){
let danoCausado = (poderPer1 - podeDefesa)/2;
alert("Dano causado:" + danoCausado);
}else {
alert("Dano de ataque é 0")
}

