function selectSort(arr) {
    const array = arr.slice();
    const sortedArray = [];

    while (array.length) {
        let minIndex = 0;

        array.forEach((item, index) => {
            if (item < array[minIndex]) {
                minIndex = index;
            }
        });
        sortedArray.push(array[minIndex]);
        array.splice(minIndex, 1);
    }

    return sortedArray;
}

const arr = [ 5, 9, 107, 30, 47, 22, 1 ];

console.log(selectSort(arr));
