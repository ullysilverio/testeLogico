function isFibonacci(numero) {
    if (numero < 0) return `${numero} não pertence à sequência de Fibonacci.`;

    let a = 0, b = 1;

    while (a < numero) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    if (a === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}


const numero = 3;  // Substituir este valor pelo número que deseja verificar
const resultado = isFibonacci(numero);
console.log(resultado);