import { SinglyLinkedList } from './singly-linked-list';

describe('SinglyLinkedList', () => {
	let list: SinglyLinkedList;

	beforeEach(() => {
		list = new SinglyLinkedList();
	});

	test('addFirst adds element to the beginning of the list', () => {
		list.addFirst(1);
		expect(list.head?.data).toBe(1);
		expect(list.tail?.data).toBe(1);
		expect(list.listSize()).toBe(1);

		list.addFirst(2);
		expect(list.head?.data).toBe(2);
		expect(list.tail?.data).toBe(1);
		expect(list.listSize()).toBe(2);
	});

	test('addLast adds element to the end of the list', () => {
		list.addLast(1);
		expect(list.head?.data).toBe(1);
		expect(list.tail?.data).toBe(1);
		expect(list.listSize()).toBe(1);

		list.addLast(2);
		expect(list.head?.data).toBe(1);
		expect(list.tail?.data).toBe(2);
		expect(list.listSize()).toBe(2);
	});

	test('removeFirst removes the first element from the list', () => {
		list.addFirst(1);
		list.addFirst(2);
		list.addFirst(3);

		list.removeFirst();
		expect(list.head?.data).toBe(2);
		expect(list.tail?.data).toBe(1);
		expect(list.listSize()).toBe(2);

		list.removeFirst();
		expect(list.head?.data).toBe(1);
		expect(list.tail?.data).toBe(1);
		expect(list.listSize()).toBe(1);

		list.removeFirst();
		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
		expect(list.listSize()).toBe(0);

		expect(list.removeFirst()).toBe('Linked List is empty');
	});

	test('removeLast removes the last element from the list', () => {
		list.addFirst(1);
		list.addFirst(2);
		list.addFirst(3);

		list.removeLast();
		expect(list.head?.data).toBe(3);
		expect(list.tail?.data).toBe(2);
		expect(list.listSize()).toBe(2);

		list.removeLast();
		expect(list.head?.data).toBe(3);
		expect(list.tail?.data).toBe(3);
		expect(list.listSize()).toBe(1);

		list.removeLast();
		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
		expect(list.listSize()).toBe(0);

		expect(list.removeLast()).toBe('Linked List is empty');
	});

	test('remove removes the specified element from the list', () => {
		list.addFirst(1);
		list.addFirst(2);
		list.addFirst(3);

		list.remove(2);
		expect(list.head?.data).toBe(3);
		expect(list.tail?.data).toBe(1);
		expect(list.listSize()).toBe(2);

		list.remove(1);
		expect(list.head?.data).toBe(3);
		expect(list.tail?.data).toBe(3);
		expect(list.listSize()).toBe(1);

		list.remove(3);
		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
		expect(list.listSize()).toBe(0);

		expect(list.remove(0)).toBeUndefined();
	});

	test('removeAt removes the element at the specified index', () => {
		list.addFirst(1);
		list.addFirst(2);
		list.addFirst(3);

		list.removeAt(1);
	});
});
