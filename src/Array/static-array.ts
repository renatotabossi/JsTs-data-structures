export class StaticArray {
	array: any[];
	capacity: number;
	length: number;

	constructor(array?: any, capacity?: number) {
		this.array = array ? [array] : [];
		this.capacity = capacity ?? this.array.length;
		this.length = this.array.length;
	}

	add(input: any): any[] | Error {
		const arr = this.array;

		if (typeof input !== 'object' && !Array.isArray(input)) {
			const changedLenght = arr.push(input);

			if (changedLenght > this.capacity) {
				throw new Error('Out of Capacity');
			}
		} else if (Array.isArray(input)) {
			for (const i of input) {
				const changedLenght = arr.push(i);
				if (changedLenght > this.capacity) {
					throw new Error('Out of Capacity');
				}
			}
		} else {
			for (const i of Object.values(input)) {
				const changedLenght = arr.push(i);
				if (changedLenght > this.capacity) {
					throw new Error('Out of Capacity');
				}
			}
		}

		return arr;
	}

	remove() {}
}
