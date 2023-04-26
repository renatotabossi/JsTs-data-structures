import { Node, SinglyLinkedList } from '../Linked-list/Single/singly-linked-list';

export class Queue extends SinglyLinkedList {
	constructor() {
		super();
	}

	Queue(elem: any) {
		this.offer(elem);
	}

	offer(elem: any): void {
		this.addLast(elem);
	}

	poll(): Partial<Node> | string {
		if (this.isEmpty()) return 'Queue is empty';
		return this.removeFirst();
	}

	peek(): Partial<Node> | string {
		if (this.isEmpty()) return 'Queue is empty';
		return this.peekFirst();
	}

	queueSize() {
		return this.size;
	}
}
