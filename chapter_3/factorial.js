function calcFactorial(x) {
    return x > 1
        ? x * calcFactorial(x - 1)
        : 1;
}

console.log(calcFactorial(4)); // 24
