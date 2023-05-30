import { PriorityQueue } from './priority-queue';

describe('PriorityQueue', () => {
	it('should initialize an empty priority queue', () => {
		const queue = new PriorityQueue([]);
		expect(queue.isEmpty()).toBe(true);
		expect(queue.size()).toBe(0);
		expect(queue.peek()).toBeNull();
	});

	it('should correctly add elements and maintain the priority order', () => {
		const queue = new PriorityQueue([]);

		queue.add(5);
		queue.add(3);
		queue.add(8);
		queue.add(1);

		expect(queue.size()).toBe(4);
		expect(queue.peek()).toBe(1);

		expect(queue.poll()).toBe(1);
		expect(queue.size()).toBe(3);

		expect(queue.poll()).toBe(3);
		expect(queue.poll()).toBe(5);
		expect(queue.poll()).toBe(8);

		expect(queue.isEmpty()).toBe(true);
		expect(queue.peek()).toBeNull();
	});

	it('should correctly check if an element is present in the queue', () => {
		const queue = new PriorityQueue([5, 3, 8, 1]);
		console.log("🚀 ~ file: priority-queue.spec.ts:35 ~ it ~ queue:", queue)

		expect(queue.contains(8)).toBe(true);
		expect(queue.contains(2)).toBe(false);
	});

	it('should clear the priority queue', () => {
		const queue = new PriorityQueue([5, 3, 8, 1]);

		queue.clear();

		expect(queue.isEmpty()).toBe(true);
		expect(queue.size()).toBe(0);
		expect(queue.peek()).toBeNull();
	});
});
