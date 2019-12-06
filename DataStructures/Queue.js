function Queue(array) {
	this.array = [];
	if (array) { this.array = array; }
}

Queue.prototype.getBuffer = function () {
	return this.array.slice();
};

Queue.prototype.isEmpty = function() {
	return this.array.length === 0;
};

Queue.prototype.peek = function() {
	return this.array[0];
};

Queue.prototype.enqueue = function(value) {
	return this.array.push(value);
};

Queue.prototype.dequeue = function() {
	return this.array.shift();
};

Queue.prototype.accessNthTopNode = function (node) {
	return this.array[node - 1];
};

Queue.prototype.search = function(element) {
	return this.array.indexOf(element) !== -1;
};



let queue1 = new Queue([1, 2, 3, 4]);

console.log(queue1.search(12));
