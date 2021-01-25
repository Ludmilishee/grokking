function kNearestNeighbours(source, target, parameters = {}) {
    const defaultParameters = { neighbours: 5, task: 'classification' };
    const { neighbours, task } = { ...defaultParameters, ...parameters };
    const data = source.slice();
    const targetDot = Object.values(target);

    const nearestData = data
        .sort((a, b) => {
            const dotA = { ...a };
            const dotB = { ...b };
            delete dotA['answer'];
            delete dotB['answer'];

            return getDotsSimilarity(Object.values(dotA), targetDot) - getDotsSimilarity(Object.values(dotB), targetDot);
        })
        .slice(0, neighbours);
    const answers = nearestData.map(item => item.answer);

    return task === 'classification'
        ? findMostFrequent(answers)
        : findAverage(answers);
}

function findMostFrequent(array) {
    const answers = array.reduce((acc, item) => {
        acc[item] = acc[item] !== undefined ? acc[item] + 1 : 1;
        return acc;
    }, {});

    return Object.keys(answers).sort((a, b) => answers[b] - answers[a])[0];
}

function findAverage(array) {
    const sum = array.reduce((acc, item) => acc += item, 0);

    return sum / array.length;
}

function getDotsSimilarity(dot, targetDot) {
    const res = dot.reduce((acc, dotCoord, i) => {
        acc += (dotCoord - targetDot[i]) ** 2;
        return acc;
    }, 0);

    return Math.sqrt(res);
}

const classificationData = [
    { size: 3, redIntensity: 4, answer: 'grapefruit' },
    { size: 2, redIntensity: 1, answer: 'orange' },
    { size: 3, redIntensity: 2, answer: 'orange' },
    { size: 4, redIntensity: 4, answer: 'grapefruit' },
    { size: 3, redIntensity: 1, answer: 'orange' },
    { size: 1, redIntensity: 1, answer: 'orange' },
    { size: 5, redIntensity: 4, answer: 'grapefruit' },
];

let fruit = { size: 5, redIntensity: 3 };
console.log(kNearestNeighbours(classificationData, fruit, { task: 'classification' })); // grapefruit

fruit = { size: 2, redIntensity: 3 };
console.log(kNearestNeighbours(classificationData, fruit, { task: 'classification' })); // orange

const regressData = [
    { weather: 5, isHoliday: 1, isSportDay: 0, answer: 300 },
    { weather: 3, isHoliday: 1, isSportDay: 1, answer: 225 },
    { weather: 1, isHoliday: 1, isSportDay: 0, answer: 75 },
    { weather: 4, isHoliday: 0, isSportDay: 1, answer: 200 },
    { weather: 4, isHoliday: 0, isSportDay: 0, answer: 150 },
    { weather: 2, isHoliday: 0, isSportDay: 0, answer: 50 },
];
const day = { weather: 4, isHoliday: 1, isSportDay: 0 };
console.log(kNearestNeighbours(regressData, day, { task: 'regress', neighbours: 4 })); // 218.75
