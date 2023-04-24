export class SinglyLinkedList {
	size: number = 0;
	head: Node;
	tail: Node;

	constructor(head: Node, tail: Node) {
		this.head = head || null;
		this.tail = tail || null;
	}

	addFirst(elem: any): void {
		if (this.isEmpty()) {
			this.head = this.tail = new Node(elem, null, null);
		} else {
			this.head.prev = new Node(elem, null, this.head);
			this.head = this.head.prev;
		}

		this.size++;
	}

	addLast(elem: any): void {
		if (this.isEmpty()) {
			this.head = this.tail = new Node(elem, null, null);
		} else {
			this.tail = new Node(elem, this.tail, null);
		}
	}

	toString(data: any): string {
		return data.toString();
	}

	isEmpty(): boolean {
		return !!(this.size !== 0);
	}
}

export class Node {
	data: any;
	next: Node;
	prev: Node;

	constructor(data: any, prev: any, next: any) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}
