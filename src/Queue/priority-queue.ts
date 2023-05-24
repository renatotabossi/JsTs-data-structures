// let i be the parent node index
// left child index: 2i + 1
// right child index: 2i + 2
// zero based

import { DynamicArray } from '../Array/Dynamic/dynamic-array';

export class PriorityQueue {
	private heapSize: number = 0;

	// The internal capacity of the heap
	private heapCapacity: number = 0;

	// A dynamic list to track the elements inside the heap
	private heap: DynamicArray;

	constructor(heap: Array<number> | Array<string>) {
		this.heap = new DynamicArray(heap);
	}

	isEmpty(): Boolean {
		if (this.heapSize === 0) {
			return true;
		} else {
			return false;
		}
	}

	clear(): void {
		if (this.heapSize === 0) return;

		this.heap.clear;
	}

	size(): number {
		return this.heapSize;
	}

	peek(): any {
		if (this.heapSize === 0) return null;

		return this.heap.get(0);
	}

	poll(): void {}

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
		const indexI = this.heap.indexOf(i);
		const indexJ = this.heap.indexOf(j);

		const elemI = this.heap.get(indexI);
		const elemJ = this.heap.get(indexJ);

		this.heap.set(elemI, elemJ);
		this.heap.set(elemJ, elemI);
	}

	less(i: number, j: number): boolean {
		const indexI = this.heap.indexOf(i);
		const indexJ = this.heap.indexOf(j);

		const elemI = this.heap.get(indexI);
		const elemJ = this.heap.get(indexJ);

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
