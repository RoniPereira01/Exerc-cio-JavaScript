function calcPrimo(numero){


if(numero <= 1){
  return false
}

for (let i = 2; i <= Math.sqrt(numero); i++){
    if( numero %i === 0){
        return false;
    }
}

return true

}

console.log(calcPrimo(5))
console.log(calcPrimo(9 ))
console.log(calcPrimo(13))
console.log(calcPrimo(1))