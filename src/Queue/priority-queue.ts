export class PriorityQueue {
	private heapSize: number = 0;

	private map: Map<number, number> = new Map()

	private heap: Array<number>;

	constructor(heap: Array<number>) {
		this.heap = heap;
	}

	isEmpty(): Boolean {
		return this.heapSize === 0;
	}

	clear(): void {
		if (this.heapSize === 0) return;

		this.heap = [];
		this.heapSize = 0;
	}

	set(input: any, index: number): any[] {
		this.heap[index] = input;
		
		return this.toArray();
	}

	toArray(): any[] {
		return [...this.heap];
	}

	size(): number {
		return this.heapSize;
	}

	get(index: number): any {
		return this.heap[index];
	}

	peek(): number | string | null {
		if (this.heapSize === 0) return null;

		return this.get(0);
	}

	poll(): number | void {
		if (this.heapSize === 0) return;
		return this.removeAt(0);
	}

	contains(el: number): boolean {
		if (this.heapSize === 0) return false;
		for (let index = 0; index < this.heapSize; index++) {
			if (this.get(index) === el) {
				return true;
			}
		}
		return false;
	}

	swap(i: number, j: number): void {
		const elemI = this.get(i);
		const elemJ = this.get(j);

		this.set(elemJ, i);
		this.set(elemI, j);
	}

	less(i: number, j: number): boolean {
		const elemI = this.get(i);
		const elemJ = this.get(j);

		return elemI < elemJ;
	}

	swim(i: number): void {
		let parentIndex = Math.floor((i - 1) / 2);

		while (i > 0 && this.less(i, parentIndex)) {
			this.swap(parentIndex, i);
			i = parentIndex;
			parentIndex = Math.floor((i - 1) / 2);
		}
	}

	sink(i: number): void {
		while (true) {
			let left = 2 * i + 1;
			let right = 2 * i + 2;
			let smallest = left;

			if (right < this.heapSize && this.less(right, left)) {
				smallest = right;
			}

			if (left >= this.heapSize || this.less(i, smallest)) break;

			this.swap(smallest, i);
			i = smallest;
		}
	}

	add(elem: number): void {
		if (elem === null) return;

		this.set(elem, this.heapSize);
		
		this.swim(this.heapSize);
		this.heapSize++;
	}

	remove(elem: number): boolean {
		if (this.isEmpty()) return false;

		const i = this.heap.indexOf(elem);

		if (i >= 0) {
			this.removeAt(i);
			return true;
		}

		return false;
	}

	removeAt(i: number): number | void{
		if (this.isEmpty()) return;
		const root = this.get(0);
		this.heapSize--;

		this.swap(i, this.heapSize);

		this.set(null, this.heapSize);

		let elem = this.get(i);

		this.sink(i);

		if (this.get(i) === elem) this.swim(i);
		return root
	}
}
