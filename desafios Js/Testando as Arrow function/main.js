function soma(a,b){
    return a  + b;
}

console.log(soma(5,4))



let soma2= function(a,b){
return a + b
}

console.log(soma(20,30))


// modelo basico de uma arrow function
let soma3 =(a,b)=> {
    return a+b
}

console.log(soma3(15,5))


// fazendo  a arrow function sem o return
const subtraçao = (a,b) => a -b

console.log(subtraçao(5,2))


// forma de fazer a arrow function direto
const dobro = n => `O dobro de ${n} é ${n * 2}`
const number = 21

console.log(double(number))