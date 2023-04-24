import { StaticArray } from '../Static/static-array';

export class DynamicArray extends StaticArray {
	constructor(array: any[] = []) {
		super(array);
		this.len = array.length;
		this.capacity = array.length;
	}

	add(input: any): any[] | Error {
		if (typeof input !== 'object' && !Array.isArray(input)) {
			this.len = this.array.push(input);
			this.adaptLength(this.len);
		} else if (Array.isArray(input)) {
			for (const i of input) {
				this.len = this.array.push(i);
				this.adaptLength(this.len);
			}
		} else {
			for (const i of Object.values(input)) {
				this.len = this.array.push(i);
				this.adaptLength(this.len);
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
