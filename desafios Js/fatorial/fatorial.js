function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;  // O fatorial de 0 e 1 é 1
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Exemplos de uso:
console.log(calcularFatorial(5));  // Saída: 120 (pois 5! = 5 * 4 * 3 * 2 * 1)
console.log(calcularFatorial(0));  // Saída: 1 (por definição)
console.log(calcularFatorial(1));  // Saída: 1 (por definição)