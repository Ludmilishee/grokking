function sum_recursive(numbers) {
    return numbers.length === 1
        ? numbers[0]
        : numbers[0] + sum_recursive(numbers.slice(1));
}

console.log(sum_recursive([1, 2, 3, 4, 5])); // 15
