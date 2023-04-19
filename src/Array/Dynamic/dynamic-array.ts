import { StaticArray } from '../Static/static-array';

export class DynamicArray extends StaticArray {
	constructor(array: any[] = []) {
		super(array);
		this.len = array.length;
		this.capacity = array.length + 1;
	}

	add(input: any): any[] | Error {
		const arr = this.array;
		let len = this.len;
		if (typeof input !== 'object' && !Array.isArray(input)) {
			len = arr.push(input);
			console.log({ len });
			console.log(this.capacity);
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

	adaptLength(input: number) {
		if (input > this.capacity) {
			this.capacity = this.capacity * 2;
			const newArr = new Array(this.capacity);
			for (let i = 0; i < this.array.length; i++) {
				newArr[i] = this.array[i];
			}
			this.array = newArr;
		}
	}
}
