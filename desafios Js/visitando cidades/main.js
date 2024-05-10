
let nome = prompt("Qual seu nome:")
let cidade = ""
contador = 0

let continuar= prompt("Voce visitou alguma cidade?(Sim/Nao)")

while( continuar === "Sim"){
    let cidade = prompt("Qual o nome da cidade visitada?")
    cidade += "-" + cidade + "/n";
    contador++;
    continuar = prompt("Voce visitou alguma outra cidade(Sim/Nao)") 
}

alert(
    "Turista:" + nome +
    "\nQuantidade de cidades visitadas: " + contador +
    "\nCidades visitadas:\n" + cidade
    )

