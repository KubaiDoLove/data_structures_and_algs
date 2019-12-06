function swap(array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j <= i; j++) {
			if (array[i] < array[j]) {
				swap(array, i, j);
			}
		}
	}

	return array;
}

console.log(bubbleSort([1, 3, 4, 2, 6, 5]));
