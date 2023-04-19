import { StaticArray } from './static-array';

describe('StaticArray', () => {
	let staticArray: StaticArray;

	beforeEach(() => {
		staticArray = new StaticArray([], 3);
	});

	it('should add a single element to the array', () => {
		staticArray.add('foo');
		expect(staticArray.get(0)).toBe('foo');
	});

	it('should add multiple elements to the array', () => {
		staticArray.add(['foo', 'bar']);
		expect(staticArray.get(0)).toBe('foo');
		expect(staticArray.get(1)).toBe('bar');
	});

	it('should add object values to the array', () => {
		staticArray.add({ foo: 'bar', baz: 'qux' });
		expect(staticArray.get(0)).toEqual('bar');
		expect(staticArray.get(1)).toEqual('qux');
	});

	it('should set a value at a specific index', () => {
		staticArray.add('foo');
		staticArray.set('bar', 0);
		expect(staticArray.get(0)).toBe('bar');
	});

	it('should remove a value at a specific index', () => {
		staticArray.add(['foo', 'bar', 'baz']);
		staticArray.removeAt(1);
		expect(staticArray.get(0)).toBe('foo');
		expect(staticArray.get(1)).toBe('baz');
		expect(staticArray.toArray()).toEqual(['foo', 'baz']);
	});

	it('should remove a specific value from the array', () => {
		staticArray.add(['foo', 'bar', 'baz']);
		staticArray.remove('bar');
		expect(staticArray.get(0)).toBe('foo');
		expect(staticArray.get(1)).toBe('baz');
		expect(staticArray.toArray()).toEqual(['foo', 'baz']);
	});

	it('should clear the array', () => {
		staticArray.add(['foo', 'bar', 'baz']);
		staticArray.clear();
		expect(staticArray.toArray()).toEqual([]);
		expect(staticArray.get(0)).toBeUndefined();
	});

	it('should return the index of a value in the array', () => {
		staticArray.add(['foo', 'bar', 'baz']);
		expect(staticArray.indexOf('bar')).toBe(1);
	});

	it('should return -1 if a value is not found in the array', () => {
		staticArray.add(['foo', 'bar', 'baz']);
		expect(staticArray.indexOf('qux')).toBe(-1);
	});

	it('should return true if the array contains a value', () => {
		staticArray.add(['foo', 'bar', 'baz']);
		expect(staticArray.contains('bar')).toBe(true);
	});

	it('should return false if the array does not contain a value', () => {
		staticArray.add(['foo', 'bar', 'baz']);
		console.log('🚀 ~ file: static-array.spec.ts:73 ~ it ~ staticArray:', staticArray);
		expect(staticArray.contains('qux')).toBe(false);
	});

	it('should throw an error when the array is out of capacity', () => {
		expect(() => {
			staticArray.add(['foo', 'bar', 'baz', 'qux']);
		}).toThrow('Out of Capacity');
	});
});
