function binarySearch(array, n) {
	let start = 0, end = array.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if(array[mid] === n) { return true }
		else if (array[mid] < n) { start = mid + 1 }
		else { end = mid - 1 }
	}
	return false;
}

let searchArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(searchArray, 12));
