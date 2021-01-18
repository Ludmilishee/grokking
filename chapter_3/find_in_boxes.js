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
