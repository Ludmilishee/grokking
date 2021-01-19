function itemCount(items) {
    return items.length === 1
        ? 1
        : 1 + itemCount(items.slice(1));
}

console.log(itemCount([ 4, 8, 15, 16, 23, 42 ])); // 6
