function findCheapestPath(graph) {
    const { costs, parents } = initFillTables();
    const processed = [];

    let node = findNearestNode(costs, processed);
    while (node) {
        const nodeCost = costs[node];
        const neighbors = Object.keys(graph[node]);

        neighbors.forEach(n => {
            const newValue = nodeCost + graph[node][n];
            if (newValue < costs[n]) {
                costs[n] = newValue;
                parents[n] = node;
            }
        });
        processed.push(node);
        node = findNearestNode(costs, processed);
    }

    return {
        summaryCost: costs.fin,
        path: getPath(parents)
    }
}

function initFillTables() {
    const costs = { fin: Infinity };
    const parents = {};

    Object.assign(costs, graph.start);
    Object.keys(graph.start).forEach(n => {
        parents[n] = 'start';
    });

    return { costs, parents };
}

function findNearestNode(costs, processed) {
    let nearest = null;

    Object.keys(costs).forEach(n => {
        if ((nearest === null || costs[n] < costs[nearest]) && !processed.includes(n)) {
            nearest = n;
        }
    });

    return nearest;
}

function getPath(parents) {
    let res = 'fin';
    let nextValue = parents.fin;

    while (nextValue) {
        res = `${nextValue} -> ${res}`;
        nextValue = parents[nextValue];
    }

    return res;
}

const graph = {
    start: {
        a: 6,
        b: 2
    },
    a: {
        fin: 1
    },
    b: {
        a: 3,
        fin: 5
    },
    fin: {}
};
console.log(findCheapestPath(graph)); // { summaryCost: 6, path: 'start -> b -> a -> fin' }
