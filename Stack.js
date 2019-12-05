function Stack(array) {
	this.array = [];
	if (array) { this.array = array; }
}

Stack.prototype.getBuffer = function() {
	return this.array.slice();
}

Stack.prototype.isEmpty = function() {
	return this.array.length === 0;
}

Stack.prototype.peek = function() {
	return this.array[this.array.length - 1];
}

Stack.prototype.push = function(value) {
	this.array.push(value);
}

Stack.prototype.pop = function() {
	this.array.pop();
}

Stack.prototype.accessNthTopNode = function(node) {
	return this.array[node-1];
}

Stack.prototype.search = function(element) {
	if (this.array.indexOf(element) !== -1) {
		return true;
	} else {
		return false;
	}
}

let stack1 = new Stack([1, 2, 3]);
stack1.push(4)
console.log(stack1, stack1.search(21))



