class DirectedGraph {
    constructor() {
        this.edges = {};
    }

    addVertex(vertex) {
        this.edges[vertex] = {};
    };

    addEdge(origVertex, destVertex, weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.edges[origVertex][destVertex] = weight;
    };

    removeEdge(origVertex, destVertex) {
        if (this.edges[origVertex] && this.edges[origVertex][destVertex] !== undefined) {
            delete this.edges[origVertex][destVertex];
        }
    };

    removeVertex(vertex) {
        for (let adjacentVertex in this.edges[vertex]) {
            if (this.edges[vertex].hasOwnProperty(adjacentVertex)) {
                this.removeEdge(adjacentVertex, vertex);
            }

            delete this.edges[vertex];
        }
    };

    traverseBFS(vertex, fn) {
        let queue = [],
            visited = {};

        queue.push(vertex);

        while (queue.length) {
            vertex = queue.shift();
            if (!visited[vertex]) {
                visited[vertex] = true;
                fn(vertex);
                for (let adjacentVertex in this.edges[vertex]) {
                    if(this.edges[vertex].hasOwnProperty(adjacentVertex)) {
                        queue.push(adjacentVertex);
                    }
                }
            }
        }
    };

    _traverseDFS(vertex, visited, fn) {
        visited[vertex] = true;
        fn(vertex);
        for (let adjacentVertex in this.edges[vertex]) {
            if (this.edges[vertex].hasOwnProperty(adjacentVertex)) {
                if(!visited[adjacentVertex]) {
                    this._traverseDFS(adjacentVertex, visited, fn)
                }
            }
        }
    }

    traverseDFS = function(vertex, fn) {
        let visited = {};
        this._traverseDFS(vertex, visited, fn);
    };
}

let digraph = new DirectedGraph();
digraph.addVertex("A");
digraph.addVertex("B");
digraph.addVertex("C");
digraph.addEdge("A", 'B', 1);
digraph.addEdge("B", "C", 2);
digraph.addEdge("C","A", 3);

digraph.traverseDFS("B", vertex => { console.log(vertex) });