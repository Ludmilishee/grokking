function findInChestCyclic(chest, key) {
    const boxes = chest.slice();

    while (boxes.length) {
        const next = boxes[0];

        if (Array.isArray(next)) {
            boxes.push(...next);
        } else if (next === key) {
            return next;
        }
        boxes.shift();
    }
}

function findInChestRecursively(box, key) {
    box.find(item => {
        if (Array.isArray(item)) {
            return findInChestRecursively(item, key)
        } else {
            return item === key;
        }
    });
}

// Имитация коробок в коробках
// [] - коробка в сундуке
// null - какая-то вещь
// 'key' - ключ, который необходимо найти
const chest = [
    [ null, null, null, null ],
    [
        [ null, null, null, [ null, 'key'] ],
        [ null, null, null ],
        [ null ],
    ],
    [
        [ null, null, null, [ null, null ] ],
        [ null, [ null, null ] ],
    ],
];

findInChestCyclic(chest, 'key');
findInChestRecursively(chest, 'key');
