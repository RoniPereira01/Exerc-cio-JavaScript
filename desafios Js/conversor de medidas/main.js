 let conversor = prompt("Digite um valor em metros:");

 let convetFor = prompt("Escolha para qual conversao voce deseja:'milimetro','centimetro','decimetro','decametro','hectometro','quilometro' ?")

switch (convetFor){

case 'milimetro':
    calcular = conversor*1000
    alert("O valor em milimetro:" + calcular);
    break;
case 'centimetro':
    calcular = conversor*100;
    alert("O valor em centimetro:"+ calcular);
    break;
case 'decimetro':
    calcular = conversor*10;
    alert("O valor em decimetro:"+ calcular);
    break;    
case 'decametro':
    calcular = conversor*0.1;
    alert("O valor em decametro:"+ calcular);
    break;      
case 'hectometro':
    calcular = conversor*0.01;
    alert("O valor em hectometro:"+ calcular);
    break;          
case 'quilometro':
    calcular = conversor/1000;
    alert("O valor em quilometro:"+ calcular);
    break;   
default:
    alert("Nome invalido!!");
}