"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticArray = void 0;
class StaticArray {
    constructor(array, capacity) {
        this.array = array ? [array] : [];
        this.capacity = capacity !== null && capacity !== void 0 ? capacity : array.length;
        this.length = array.length;
    }
    add(input) {
        const arr = this.array;
        if (typeof input !== 'object' && !Array.isArray(input)) {
            const changedLenght = arr.push(input);
            if (changedLenght > this.capacity) {
                throw new Error('Out of Capacity');
            }
        }
        else if (Array.isArray(input)) {
            for (const i of input) {
                const changedLenght = arr.push(i);
                if (changedLenght > this.capacity) {
                    throw new Error('Out of Capacity');
                }
            }
        }
        else {
            for (const i of Object.values(input)) {
                const changedLenght = arr.push(i);
                if (changedLenght > this.capacity) {
                    throw new Error('Out of Capacity');
                }
            }
        }
        return arr;
    }
    remove() { }
}
exports.StaticArray = StaticArray;
