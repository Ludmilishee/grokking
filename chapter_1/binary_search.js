function binarySearch(arr, target) {
    let from = 0;
    let to = arr.length - 1;
    let middle, guess;

    while (from <= to) {
        middle = Math.trunc((to + from) / 2);
        guess = arr[middle];

        if (guess > target) {
            to = middle - 1;
        } else if (guess < target) {
            from = middle + 1;
        } else if (guess === target) {
            return middle;
        }
    }
}

const arr = Array.from(new Array(100), (item, index) => index + 1);

console.log(binarySearch(arr, 77)); // 76
console.log(binarySearch(arr, 1)); // 0
console.log(binarySearch(arr, 100)); // 99
