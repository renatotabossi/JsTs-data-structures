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
		if (typeof input !== 'object' && !Array.isArray(input)) {
			this.len = this.array.push(input);
			this.capacityError(this.len, this.capacity);
		} else if (Array.isArray(input)) {
			for (const i of input) {
				this.len = this.array.push(i);
				this.capacityError(this.len, this.capacity);
			}
		} else {
			for (const i of Object.values(input)) {
				this.len = this.array.push(i);
				this.capacityError(this.len, this.capacity);
			}
		}
		return this.toArray();
	}

	get(index: number): any {
		const arr = this.array;
		return arr[index];
	}

	set(input: any, index: number): any[] {
		this.array[index] = input;
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
		for (let index = 0; index < this.array.length; index++) {
			if (input === this.array[index]) {
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
