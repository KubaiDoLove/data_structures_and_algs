function linear_search(array, n) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === n) {
			return true;
		}
	}

	return false;
}

let searchArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(linear_search(searchArray, 10));
