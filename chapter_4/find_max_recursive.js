function findMax(numbers) {
    if (numbers.length === 1) {
        return numbers[0]
    } else {
        const max = findMax(numbers.slice(1));
        const current = numbers[0];
        return max > current ? max : current;
    }
}

console.log(findMax([ 1, 5, 2, 3, 17, 4, 6, 7 ])); // 17
