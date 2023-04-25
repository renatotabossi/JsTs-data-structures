import { SinglyLinkedList } from '../Single/singly-linked-list';

export class DoublyLinkedList extends SinglyLinkedList {
	size: number = 0;
	head: Node | null = null;
	tail: Node | null = null;

	constructor() {
		super();
	}

	addFirst(elem: any): void {
		if (this.isEmpty()) {
			this.head = this.tail = new Node(elem, null, null);
		} else {
			this.head!.prev = new Node(elem, null, this.head);
			this.head = this.head!.prev;
		}

		this.size++;
	}

	addLast(elem: any): void {
		if (this.isEmpty()) {
			this.head = this.tail = new Node(elem, null, null);
		} else {
			this.tail!.next = new Node(elem, this.tail, null);
			this.tail = this.tail!.next;
		}
	}

	removeLast(): void | string {
		if (this.isEmpty()) return 'Linked List is empty';
		this.tail!.prev!.next = null;
		this.tail = this.tail!.prev;
	}

	removeFirst(): void | string {
		if (this.isEmpty()) return 'Linked List is empty';
		this.head!.next!.prev = null;
		this.head = this.head!.next;
	}
}
export class Node {
	data: any | null;
	next: Node | null;
	prev: Node | null;

	constructor(data: any, prev: any, next: any) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}
