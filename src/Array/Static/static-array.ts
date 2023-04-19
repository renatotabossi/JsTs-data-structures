export class StaticArray {
	protected array: any[];
	capacity: number;
	len: number;

	constructor(array: any[] = [], capacity: number = 0) {
		this.array = array;
		this.capacity = capacity;
		this.len = this.array.length;
	}

	add(input: any): any[] | Error {
		const arr = this.array;
		let len = this.len;
		if (typeof input !== 'object' && !Array.isArray(input)) {
			len = arr.push(input);
			this.capacityError(len, this.capacity);
		} else if (Array.isArray(input)) {
			for (const i of input) {
				len = arr.push(i);
				this.capacityError(len, this.capacity);
			}
		} else {
			for (const i of Object.values(input)) {
				len = arr.push(i);
				this.capacityError(len, this.capacity);
			}
		}
		return this.toArray();
	}

	get(index: number): any {
		const arr = this.array;
		return arr[index];
	}

	set(input: any, index: number): any[] {
		let arr = this.array;
		arr[index] = input;
		return this.toArray();
	}

	removeAt(index: number): any[] {
		this.array.splice(index, 1);
		this.len--;
		return this.toArray();
	}

	remove(input: any): any[] {
		this.array = this.array.filter((value) => value !== input);
		return this.array;
	}

	clear() {
		this.array = [];
		this.len = 0;
	}

	indexOf(input: any): number {
		let arr = this.array;
		for (let index = 0; index < arr.length; index++) {
			if (input === arr[index]) {
				return index;
			}
		}
		return -1;
	}

	contains(input: any): boolean {
		return this.indexOf(input) !== -1;
	}

	toArray(): any[] {
		return [...this.array];
	}

	protected capacityError(length: number, capacity: number) {
		if (length > capacity) throw new Error('Out of Capacity');
	}
}
