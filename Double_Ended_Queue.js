function Deque(array) {
	this.array = [];
	if (array) { this.array = array; }
}

Deque.prototype.getBuffer = function () {
	return this.array.slice();
};

Deque.prototype.isEmpty = function() {
	return this.array.length === 0;
};

Deque.prototype.peek = function() {
	return this.array[0];
};

Deque.prototype.pop = function() {
	return this.array.pop();
};

Deque.prototype.push = function(value) {
	return this.array.push(value);
};

Deque.prototype.shift = function() {
	return this.array.shift();
};

Deque.prototype.unshift = function(value) {
	return this.array.unshift(value);
}

Deque.prototype.accessNthTopNode = function (node) {
	return this.array[node - 1];
};

Deque.prototype.search = function(element) {
	return this.array.indexOf(element) !== -1;
};
