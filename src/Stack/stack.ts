import { Node, SinglyLinkedList } from '../Linked-list/Single/singly-linked-list';

export class Stack extends SinglyLinkedList {
	constructor() {
		super();
	}

	stack(elem: any) {
		this.push(elem);
	}

	push(elem: any): void {
		this.addLast(elem);
	}

	pop(): Partial<Node> | string {
		if (this.isEmpty()) return 'Stack is empty';
		return this.removeLast();
	}

	peek(): Partial<Node> | string {
		if (this.isEmpty()) return 'Stack is empty';
		return this.peekLast();
	}

	stackSize() {
		return this.size;
	}
}
