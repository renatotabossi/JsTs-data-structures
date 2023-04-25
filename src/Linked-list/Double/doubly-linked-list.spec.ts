import { DoublyLinkedList } from './doubly-linked-list';

describe('DoublyLinkedList', () => {
	let list: DoublyLinkedList;

	beforeEach(() => {
		list = new DoublyLinkedList();
	});

	describe('addFirst', () => {
		test('adds a node to the beginning of an empty list', () => {
			list.addFirst(1);
			expect(list.head!.data).toBe(1);
			expect(list.tail!.data).toBe(1);
		});

		test('adds a node to the beginning of a non-empty list', () => {
			list.addFirst(1);
			list.addFirst(2);
			expect(list.head!.data).toBe(2);
			expect(list.tail!.data).toBe(1);
		});
	});

	describe('addLast', () => {
		test('adds a node to the end of an empty list', () => {
			list.addLast(1);
			expect(list.head!.data).toBe(1);
			expect(list.tail!.data).toBe(1);
		});

		test('adds a node to the end of a non-empty list', () => {
			list.addLast(1);
			list.addLast(2);
			expect(list.head!.data).toBe(1);
			expect(list.tail!.data).toBe(2);
		});
	});

	describe('removeFirst', () => {
		test('returns an error message when the list is empty', () => {
			expect(list.removeFirst()).toBe('Linked List is empty');
		});

		test('removes the first node of a list with one element', () => {
			list.addFirst(1);
			list.removeFirst();
			expect(list.isEmpty()).toBe(true);
		});

		test('removes the first node of a list with multiple elements', () => {
			list.addLast(1);
			list.addLast(2);
			list.removeFirst();
			expect(list.head!.data).toBe(2);
			expect(list.tail!.data).toBe(2);
		});
	});

	describe('removeLast', () => {
		test('returns an error message when the list is empty', () => {
			expect(list.removeLast()).toBe('Linked List is empty');
		});

		test('removes the last node of a list with one element', () => {
			list.addFirst(1);
			list.removeLast();
			expect(list.isEmpty()).toBe(true);
		});

		test('removes the last node of a list with multiple elements', () => {
			list.addLast(1);
			list.addLast(2);
			list.removeLast();
			expect(list.head!.data).toBe(1);
			expect(list.tail!.data).toBe(1);
		});
	});
});
