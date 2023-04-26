import { Stack } from './stack';
describe('Stack', () => {
	let stack: Stack;

	beforeEach(() => {
		stack = new Stack();
	});

	test('push adds an element to the top of the stack', () => {
		stack.push('apple');
		expect(stack.peek()).toBe('apple');
		stack.push('banana');
		expect(stack.peek()).toBe('banana');
	});

	test('pop removes and returns the top element of the stack', () => {
		stack.push('apple');
		stack.push('banana');
		expect(stack.pop()).toBe('banana');
		expect(stack.peek()).toBe('apple');
		expect(stack.pop()).toBe('apple');
		expect(stack.pop()).toBe('Stack is empty');
	});

	test('peek returns the top element of the stack without removing it', () => {
		stack.push('apple');
		stack.push('banana');
		expect(stack.peek()).toBe('banana');
		expect(stack.peek()).toBe('banana');
	});

	test('stackSize returns the size of the stack', () => {
		stack.push('apple');
		expect(stack.stackSize()).toBe(1);
		stack.push('banana');
		expect(stack.stackSize()).toBe(2);
		stack.pop();
		expect(stack.stackSize()).toBe(1);
	});

	test('isEmpty returns true if the stack is empty, otherwise false', () => {
		expect(stack.isEmpty()).toBe(true);
		stack.push('apple');
		expect(stack.isEmpty()).toBe(false);
		stack.pop();
		expect(stack.isEmpty()).toBe(true);
	});
});
