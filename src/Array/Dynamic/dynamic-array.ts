import { StaticArray } from '../Static/static-array';

export class DynamicArray extends StaticArray {
	constructor(array: any[] = []) {
		super(array);
		this.len = array.length;
		this.capacity = array.length;
	}

	add(input: any): any[] | Error {
		const arr = this.array;
		let len = this.len;
		if (typeof input !== 'object' && !Array.isArray(input)) {
			len = arr.push(input);
			this.adaptLength(len);
		} else if (Array.isArray(input)) {
			for (const i of input) {
				len = arr.push(i);
				this.adaptLength(len);
			}
		} else {
			for (const i of Object.values(input)) {
				len = arr.push(i);
				this.adaptLength(len);
			}
		}
		return this.toArray();
	}

	private adaptLength(input: number) {
		if (input > this.capacity) {
			this.capacity = this.capacity === 0 ? this.capacity + 1 : this.capacity * 2;
		}
	}
}
