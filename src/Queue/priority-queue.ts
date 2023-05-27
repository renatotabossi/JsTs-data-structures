// let i be the parent node index
// left child index: 2i + 1
// right child index: 2i + 2
// zero based

import { DynamicArray } from '../Array/Dynamic/dynamic-array';

export class PriorityQueue {
	private heapSize: number = 0;

	private heapCapacity: number = 0;

	private heap: DynamicArray;

	constructor(heap: Array<number> | Array<string>) {
		this.heap = new DynamicArray(heap);
	}

	isEmpty(): Boolean {
		return this.heapSize === 0;
	}

	clear(): void {
		if (this.heapSize === 0) return;

		this.heap.clear();
	}

	size(): number {
		return this.heapSize;
	}

	peek(): number | string | null {
		if (this.heapSize === 0) return null;

		return this.heap.get(0);
	}

	poll(): number | string | null {
		if (this.heapSize === 0) return null;
		const root = this.heap.get(0);
		const lastElement = this.heap.get(this.heapSize - 1);
		this.heap.set(0, lastElement);
		this.heap.removeAt(this.heapSize - 1);
		this.heapSize--;
		this.sink(0);
		return root;
	}

	contains(el: number | string): boolean {
		if (this.heapSize === 0) return false;
		for (let index = 0; index < this.heapSize; index++) {
			if (this.heap.get(index) === el) {
				return true;
			}
		}
		return false;
	}

	swap(i: number, j: number): void {
		const elemI = this.heap.get(i);
		const elemJ = this.heap.get(j);

		this.heap.set(i, elemJ);
		this.heap.set(j, elemI);
	}

	less(i: number, j: number): boolean {
		const elemI = this.heap.get(i);
		const elemJ = this.heap.get(j);

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
}
