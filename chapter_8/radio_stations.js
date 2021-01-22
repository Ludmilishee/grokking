// O(n^2)
function findStationsGreedy(stations, states) {
    const stationList = Object.keys(stations);
    const stationsResult = [];

    while (states.length) {
        let bestStation;
        let bestStationStates = [];

        stationList.forEach(st => {
            const coveredStates = stations[st].filter(state => states.includes(state));

            if (coveredStates.length > bestStationStates.length) {
                bestStation = st;
                bestStationStates = stations[bestStation];
            }
        });
        states = states.filter(state => !stations[bestStation].includes(state));

        stationsResult.push(bestStation);
    }

    return stationsResult;
}

// O(2^n)
let a = 0;
function findStationsCombinations(stations, states) {
    const stationList = Object.keys(stations);

    for (let i = 0; i < stationList.length; i++) {
        for (let j = 0; j < stationList.length; j++) {
            const stationSet = stationList.slice(j, j + i);

            if (isBestStationSet(stations, stationSet, states)) {
                return stationSet;
            }
        }
    }
}

function isBestStationSet(allStations, stationSet, states) {
    const coveredStatesOfStation = states.filter(state => {
        return stationSet.find(station => allStations[station].includes(state))
    });

    return coveredStatesOfStation.length === states.length;
}

const states = [ 'mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az' ];
const stations = {
    kone: [ 'id', 'nv', 'ut' ],
    ktwo: [ 'wa', 'id', 'mt' ],
    kthree: [ 'or', 'nv', 'ca' ],
    kfour: [ 'nv', 'ut' ],
    kfive: [ 'ca', 'az' ],
};
console.log(findStationsGreedy(stations, states)); // [ 'kone', 'ktwo', 'kthree', 'kfive' ]
console.log(findStationsCombinations(stations, states)); // [ 'ktwo', 'kthree', 'kfour', 'kfive' ]

