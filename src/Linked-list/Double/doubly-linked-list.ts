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
		this.size++;
	}

	removeLast(): Partial<Node> | string {
		if (this.isEmpty()) return 'Linked List is empty';
		const tail = this.tail!.data;

		if (this.size === 1) {
			this.tail = this.head = null;
		} else {
			this.tail!.prev!.next = null;
			this.tail = this.tail!.prev;
		}
		this.size--;
		return tail;
	}

	removeFirst(): Partial<Node> | string {
		if (this.isEmpty()) return 'Linked List is empty';
		const head = this.head!.data;

		if (this.size === 1) {
			this.head = this.tail = null;
		} else {
			this.head!.next!.prev = null;
			this.head = this.head!.next;
		}
		this.size--;
		return head;
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
