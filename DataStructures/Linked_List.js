function SinglyLinkedListNode(data) {
	this.data = data;
	this.next = null;
}

function SinglyLinkedList() {
	this.head = null;
	this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function() {
	return this.size === 0;
};

SinglyLinkedList.prototype.insert = function(value) {
	if (this.head === null) {
		this.head = new SinglyLinkedListNode(value);
	} else {
		let temp = this.head;
		this.head = new SinglyLinkedListNode(value);
		this.head.next = temp;
	}
	this.size++;
};

SinglyLinkedList.prototype.remove = function(value) {
	let currentHead = this.head;
	if (currentHead.data === value) {
		this.head = currentHead.next;
		this.size--;
	} else {
		let prev = currentHead;
		while (currentHead.next) {
			if (currentHead.data === value) {
				prev.next = currentHead.next;
				prev = currentHead;
				currentHead = currentHead.next;
				break;
			}
			prev = currentHead;
			currentHead = currentHead.next;
		}
		if (currentHead.data === value) {
			prev.next = null;
		}
		this.size--;
	}
};

SinglyLinkedList.prototype.deleteAtHead = function() {
	let toReturn = null;
	if (this.head !== null) {
		toReturn = this.head.data;
		this.head = this.head.next
	}
	this.size--;
	return toReturn;
};

SinglyLinkedList.prototype.find = function(value) {
	let currentHead = this.head;

	while (currentHead.next) {
		if (currentHead.data === value) {
			return true;
		}
		currentHead = currentHead.next;
	}
	return currentHead.data === value;
};

let sll1 = new SinglyLinkedList();

sll1.insert(1);
sll1.insert(2);
sll1.insert(3);
sll1.insert(5);
sll1.insert(6);
sll1.insert(7);


console.log(sll1, sll1.find(2));
