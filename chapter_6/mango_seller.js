function isMangoSeller(person) {
    return person.endsWith('m');
}

function findNearestMangoSeller(graph) {
    const checkedPeople = [];
    let searchQueue = graph.you;

    while (searchQueue.length) {
        const currentPerson = searchQueue.shift();

        if (checkedPeople.includes(currentPerson)) {
            continue;
        }
        checkedPeople.push(currentPerson);

        if (isMangoSeller(currentPerson)) {
            return currentPerson;
        } else {
            searchQueue = searchQueue.concat(friendsGraph[currentPerson]);
        }
    }
}

const friendsGraph = {
    you: [ 'alice', 'bob', 'claire' ],
    bob: [ 'anuj', 'peggy' ],
    alice: [ 'peggy' ],
    claire: [ 'thom', 'jonny' ],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
};
console.log(findNearestMangoSeller(friendsGraph));
