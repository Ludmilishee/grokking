function findOptimalItems(items, availableWeight) {
    let resultTable = [];
    Object.keys(items).forEach((itemName, i) => {
        const item = items[itemName];

        resultTable.push([]);
        for (let j = 1; j <= availableWeight; j++) {
            const itemCost = item.weight <= j ? item.cost : 0;

            if (resultTable[i - 1]) {
                const remainingWeightCell = resultTable[i - 1][j - item.weight];
                const newCell = remainingWeightCell
                    ? { value: itemCost + remainingWeightCell.value, items: [ itemName ].concat(remainingWeightCell.items) }
                    : { value: itemCost, items: [ itemName ] };
                const oldCell = resultTable[i - 1][j];

                resultTable[i][j] = newCell.value >= oldCell.value ? newCell : oldCell;
            } else {
                resultTable[i][j] = { value: itemCost, items: [ itemName ] };
            }
        }
    });

    const lastCell = resultTable.slice(-1)[0].slice(-1)[0];

    return {
        table: resultTable,
        answer: lastCell.items
    };
}

const items = {
    water: { weight: 3, cost: 10 },
    book: { weight: 1, cost: 3 },
    food: { weight: 2, cost: 9 },
    jacket: { weight: 2, cost: 5 },
    camera: { weight: 1, cost: 6 },
};
const packageWeight = 6;

console.log(findOptimalItems(items, packageWeight));
/*
{
  "table": [
    [
      null,
      { "value": 0, "items": [ "water" ] },
      { "value": 0, "items": [ "water" ] },
      { "value": 10, "items": [ "water" ] },
      { "value": 10, "items": [ "water" ] },
      { "value": 10, "items": [ "water" ] },
      { "value": 10, "items": [ "water" ] }
    ],
    [
      null,
      { "value": 3, "items": [ "book" ] },
      { "value": 3, "items": [ "book", "water" ] },
      { "value": 10, "items": [ "water" ] },
      { "value": 13, "items": [ "book", "water" ] },
      { "value": 13, "items": [ "book", "water" ] },
      { "value": 13, "items": [ "book", "water" ] }
    ],
    [
      null,
      { "value": 3, "items": [ "book" ] },
      { "value": 9, "items": [ "food" ] },
      { "value": 12, "items": [ "food", "book" ] },
      { "value": 13, "items": [ "book", "water" ] },
      { "value": 19, "items": [ "food", "water" ] },
      { "value": 22, "items": [ "food", "book", "water" ] }
    ],
    [
      null,
      { "value": 3, "items": [ "book" ] },
      { "value": 9, "items": [ "food" ] },
      { "value": 12, "items": [ "food", "book" ] },
      { "value": 14, "items": [ "jacket", "food" ] },
      { "value": 19, "items": [ "food", "water" ] },
      { "value": 22, "items": [ "food", "book", "water" ] }
    ],
    [
      null,
      { "value": 6, "items": [ "camera" ] },
      { "value": 9, "items": [ "camera", "book" ] },
      { "value": 15, "items": [ "camera", "food" ] },
      { "value": 18, "items": [ "camera", "food", "book" ] },
      { "value": 20, "items": [ "camera", "jacket", "food" ] },
      { "value": 25, "items": [ "camera", "food", "water" ] }
    ]
  ],
  "answer": [ "camera", "food", "water" ]
}
*/
