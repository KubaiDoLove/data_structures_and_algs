class UndirectedGraph {
    constructor() {
        this.edges = {};
    }

    addVertex(vertex) {
        this.edges[vertex] = {}
    }

    addEdge(vertex1, vertex2, weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }

    removeEdge(vertex1, vertex2) {
        if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
            delete this.edges[vertex1][vertex2];
        }
        if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
            delete this.edges[vertex2][vertex1];
        }
    }

    removeVertex(vertex) {
        for (let adjacentVertex in this.edges[vertex]) {
            if (this.edges[vertex].hasOwnProperty(adjacentVertex)) {
                this.removeEdge(adjacentVertex, vertex);
            }
        }
        delete this.edges[vertex];
    }
}

let graph = new UndirectedGraph();

graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2, 1);
graph.removeEdge(1, 2)
graph.removeVertex(2);

console.log(graph.edges);