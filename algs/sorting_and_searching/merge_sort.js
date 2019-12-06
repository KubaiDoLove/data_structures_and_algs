function merge(leftA, rightA) {
	let results = [], leftIndex = 0, rightIndex = 0;

	while (leftIndex < leftA.length && rightIndex < rightA.length) {
		if (leftA[leftIndex] < rightA[rightIndex]) {
			results.push(leftA[leftIndex++]);
		}
		else {
			results.push(rightA[rightIndex++]);
		}
	}
	let leftRemains = leftA.slice(leftIndex), rightRemains = rightA.slice(rightIndex);

	return [...results, ...leftRemains, ...rightRemains];
}

function merge_sort(array) {
	if (array.length < 2) {
		return array;
	}

	let midpoint = Math.floor(array.length / 2), leftArray = array.slice(0, midpoint), rightArray = array.slice(midpoint);

	return merge(merge_sort(leftArray), merge_sort(rightArray));
}

console.log(merge_sort([1, 3, 5, 78, 96, 45, 22, 65, 40]));
