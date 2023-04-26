import { Queue } from './queue';

describe('Queue', () => {
	let queue: Queue;

	beforeEach(() => {
		queue = new Queue();
	});

	describe('offer', () => {
		it('adds an element to the queue', () => {
			queue.offer(1);
			expect(queue.size).toBe(1);
			expect(queue.peek()).toBe(1);
		});
	});

	describe('poll', () => {
		it('removes and returns the first element from the queue', () => {
			queue.offer(1);
			queue.offer(2);
			expect(queue.poll()).toBe(1);
			expect(queue.size).toBe(1);
		});

		it('returns "Queue is empty" when the queue is empty', () => {
			expect(queue.poll()).toBe('Queue is empty');
		});
	});

	describe('peek', () => {
		it('returns the first element in the queue', () => {
			queue.offer(1);
			queue.offer(2);
			expect(queue.peek()).toBe(1);
			expect(queue.size).toBe(2);
		});

		it('returns "Queue is empty" when the queue is empty', () => {
			expect(queue.peek()).toBe('Queue is empty');
		});
	});

	describe('queueSize', () => {
		it('returns the size of the queue', () => {
			queue.offer(1);
			queue.offer(2);
			expect(queue.queueSize()).toBe(2);
		});
	});
});
