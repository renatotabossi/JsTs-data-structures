export class SinglyLinkedList {
	size: number = 0;
	head: Node | null = null;
	tail: Node | null = null;

	constructor() {}

	addFirst(elem: any): void {
		if (this.isEmpty()) {
			this.head = this.tail = new Node(elem, null);
		} else {
			this.head = new Node(elem, this.head);
		}

		this.size++;
	}

	addLast(elem: any): void {
		if (this.isEmpty()) {
			this.head = this.tail = new Node(elem, null);
		} else {
			this.tail!.next = new Node(elem, null);
			this.tail = this.tail!.next;
		}

		this.size++;
	}

	toString(data: any): string {
		return data.toString();
	}

	isEmpty(): boolean {
		return !!(this.size === 0);
	}

	listSize(): number {
		return this.size;
	}

	add(elem: any): void {
		return this.addLast(elem);
	}

	peekFirst() {
		if (this.isEmpty()) return 'Linked List is empty';
		return this.head?.data;
	}

	peekLast() {
		if (this.isEmpty()) return 'Linked List is empty';
		return this.tail?.data;
	}

	removeFirst(): void | string {
		if (this.isEmpty()) return 'Linked List is empty';
		if (this.size === 1) {
			this.tail = this.head = null;
		} else {
			this.head = this.head!.next;
		}
		this.size--;
	}

	removeLast(): void | string {
		if (this.isEmpty()) return 'Linked List is empty';

		if (this.size === 1) {
			this.head = this.tail = null;
		} else {
			let prevNode: Node | null = null;
			let currNode: Node | null = this.head;
			while (currNode?.next) {
				prevNode = currNode;
				currNode = currNode!.next;
			}

			this.tail = prevNode;
			this.tail!.next = null;
		}
		this.size--;
	}

	remove(elem: any): void {
		let prevNode: Node | null = null;
		let currNode: Node | null = this.head;
		while (currNode) {
			if (currNode.data === elem) {
				if (prevNode) {
					prevNode.next = currNode.next;
				} else {
					this.head = currNode.next;
				}
				if (currNode === this.tail) {
					this.tail = prevNode;
				}
				this.size--;
				break;
			}
			prevNode = currNode;
			currNode = currNode.next;
		}
	}

	removeAt(index: number): void {
		if (index < 0 || index >= this.size) {
			throw new Error('Index out of bounds');
		}

		if (index === 0) {
			this.removeFirst();
			return;
		}

		let prevNode: Node | null = null;
		let currNode: Node | null = this.head;

		for (let i = 0; i < index; i++) {
			prevNode = currNode;
			currNode = currNode!.next;
		}

		prevNode!.next = currNode!.next;

		if (index === this.size - 1) {
			this.tail = prevNode;
		}

		this.size--;
	}

	indexOf(elem: any): number {
		let prevNode: Node | null = null;
		let currNode: Node | null = this.head;

		for (let i = 0; i < this.size; i++) {
			if (currNode!.data === elem) {
				return i;
			}
			prevNode = currNode;
			currNode = currNode!.next;
		}
		return -1;
	}

	contains(elem: any): boolean {
		return this.indexOf(elem) != -1;
	}
}

export class Node {
	data: any | null;
	next: Node | null;

	constructor(data: any, next: any) {
		this.data = data;
		this.next = next;
	}
}
