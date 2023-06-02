function calculadora(a, b) {
    const suma = a + b;
    const resta = a - b;
    const div = a / b;
    const mul = a * b;

    return {suma, resta, div, mul};
}

console.log(calculadora(10, 5));