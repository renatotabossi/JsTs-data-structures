import { DynamicArray } from './dynamic-array';

describe('DynamicArray', () => {
	let dynamicArray: DynamicArray;

	beforeEach(() => {
		dynamicArray = new DynamicArray();
	});

	describe('add', () => {
		it('should add a single element to the array', () => {
			const result = dynamicArray.add(1);
			expect(result).toEqual([1]);
		});

		it('should add multiple elements to the array', () => {
			const result = dynamicArray.add([1, 2, 3]);
			expect(result).toEqual([1, 2, 3]);
		});

		it('should add an object to the array', () => {
			const result = dynamicArray.add({ foo: 'bar', baz: 'qux' });
			expect(result).toEqual(['bar', 'qux']);
		});

		it('should double the capacity when adding elements exceeding the current capacity', () => {
			dynamicArray.add(1);
			dynamicArray.add(2);
			dynamicArray.add(3);
			expect(dynamicArray.capacity).toEqual(4);
		});
	});
});
