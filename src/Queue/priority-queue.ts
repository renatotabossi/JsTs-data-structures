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
		const index_i = this.heap.indexOf(i);
		const index_j = this.heap.indexOf(j);

		const elem_i = this.heap.get(index_i);
		const elem_j = this.heap.get(index_j);

		this.heap.set(elem_i, index_j);
		this.heap.set(elem_j, index_i);
	}

	less(i: number, j: number): boolean {
		const index_i = this.heap.indexOf(i);
		const index_j = this.heap.indexOf(j);

		const elem_i = this.heap.get(index_i);
		const elem_j = this.heap.get(index_j);

		return elem_i < elem_j;
	}

	swim(i: number) {
		let parentIndex = Math.floor((i - 1) / 2);

		while (i > 0 && this.less(i, parentIndex)) {
			this.swap(parentIndex, i);
			i = parentIndex;

			parentIndex = Math.floor((i - 1) / 2);
		}
	}
}
