function quickSort(arr) {
    const array = arr.slice();

    if (array.length > 1) {
        const pivotIndex = Math.trunc(array.length / 2);
        const pivotItem = array[pivotIndex];
        const arrayWithoutPivot = array.slice(0, pivotIndex).concat(array.slice(pivotIndex + 1));

        const left = arrayWithoutPivot.filter(item => item <= pivotItem);
        const right = arrayWithoutPivot.filter(item => item > pivotItem);

        return quickSort(left).concat([ pivotItem ], quickSort(right));
    } else {
        return array;
    }
}

console.log(quickSort([ 8, 2, 1, 7, 7, 4, 0, 9 ]));
