function partition(array, left, right) {
	let pivot = array[Math.floor((right + left) / 2)];

	while (left <= right) {
		while (pivot > array[left]) {
			left++;
		}
		while (pivot < array[right]) {
			right--;
		}
		if (left <= right) {
			[array[left], array[right]] = [array[right], array[left]];
			left++;
			right--;
		}
	}

	return left;
}

function quick_sort_helper(items, left, right) {
	let index;

	if (items.length > 1) {
		index = partition(items, left, right);

		if (left < index - 1) {
			quick_sort_helper(items, left, index - 1);
		}

		if (index < right) {
			quick_sort_helper(items, index, right);
		}
	}

	return items;
}

function quick_sort(items) {
	return quick_sort_helper(items, 0, items.length - 1);
}

console.log(quick_sort([1, 3, 5, 78, 96, 45, 22, 65, 40]));
