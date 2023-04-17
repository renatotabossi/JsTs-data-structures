import { StaticArray } from './static-array';

describe('StaticArray', () => {
	const array = new StaticArray();

	test('has the correct length', () => {
		expect(array.length).toBe(3);
	});

	test('can set and get values', () => {
		array.add(0);
		array.add(1);
		array.add(2);

		console.log(array);
	});

	test('throws when setting an out-of-bounds index', () => {
		expect(() => array.set(-1, 0)).toThrow();
		expect(() => array.set(3, 0)).toThrow();
	});
});
