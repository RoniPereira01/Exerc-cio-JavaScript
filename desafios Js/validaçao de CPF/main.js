let digiteCpf =prompt("Digite seu CPF:");

const numeroTotal = 11

function numeroCpf(){

     if (digiteCpf.length === numeroTotal){
        alert("CPF valido!")   
     }else {
        alert("CPF invalido")
     }

}

numeroCpf()