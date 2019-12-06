function BinarySearchTree() {
	this._root = null;
}

function findMin(root) {
	while (root.left) {
		root = root.left;
	}
	return root;
}

function deleteRecursively(root, value) {
	if (!root) {
		return null
	}
	else if (value < root.value) {
		root.left = deleteRecursively(root.left, value);
	}
	else if (value > root.value) {
		root.right = deleteRecursively(root.right, value);
	} else {
		if (!root.right && !root.left) {
			return null;
		} else if (!root.left) {
			root = root.right;
			return root;
		} else if (!root.right) {
			root = root.left;
			return root;
		} else {
			let temp = findMin(root.right);
			root.value = temp.value;
			root.right = deleteRecursively(root.right, temp.value);
			return root;
		}
	}

	return root;
}

BinarySearchTree.prototype.insert = function(value) {
	let thisNode = {
		left: null,
		right: null,
		value
	};

	if (!this._root) {
		this._root = thisNode;
	} else {
		let currentRoot = this._root;
		while(true) {
			if (currentRoot.value > value) {
				if(currentRoot.left !== null) {
					currentRoot = currentRoot.left;
				}
				else {
					currentRoot.left = thisNode;
					break;
				}
			}
			else if (currentRoot.value < value) {
				if (currentRoot.right !== null) {
					currentRoot = currentRoot.right;
				}
				else {
					currentRoot.right = value;
					break;
				}
			}
			else {
				break;
			}
		}
	}
};

BinarySearchTree.prototype.remove = function(value) {
	return deleteRecursively(this._root, value);
};

BinarySearchTree.prototype.findNode = function(value) {
	let currentRoot = this._root, found = false;
	while (currentRoot) {
		if (currentRoot.value > value) {
			currentRoot = currentRoot.left;
		} else if (currentRoot.value < value) {
			currentRoot = currentRoot.right;
		} else {
			found = true;
			break;
		}
	}
	return found;
};

let bst1 = new BinarySearchTree();

bst1.insert(1);
bst1.insert(2);
bst1.insert(3);
bst1.insert(4);
bst1.insert(5);

console.log(bst1.findNode(3))
