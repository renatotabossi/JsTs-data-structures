"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const static_array_1 = require("./static-array");
describe('StaticArray', () => {
    const array = new static_array_1.StaticArray();
    test('has the correct length', () => {
        expect(array.length).toBe(3);
    });
    test('can set and get values', () => {
        array.add(0);
        array.add(1);
        array.add(2);
        console.log(array);
    });
    test('throws when setting an out-of-bounds index', () => {
        expect(() => array.set(-1, 0)).toThrow();
        expect(() => array.set(3, 0)).toThrow();
    });
});
