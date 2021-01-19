// передавать сразу кусок arr (типа arr.slice(from, to)) - плохая идея, т.к. не удастся вернуть индекс
// относительно начального массива
function binarySearch(arr, target) {
    let from = 0;
    let to = arr.length - 1;

    return findInRange(from, to, arr, target)
}

function findInRange(from, to, arr, target) {
    let middle = Math.trunc((to + from) / 2);
    let guess = arr[middle];

    if (guess > target) {
        return findInRange(from, middle - 1, arr, target);
    } else if (guess < target) {
        return findInRange(middle + 1, to, arr, target);
    } else {
        return middle;
    }
}

const arr = Array.from(new Array(100), (item, index) => index + 1);

console.log(binarySearch(arr, 3)); // 2
