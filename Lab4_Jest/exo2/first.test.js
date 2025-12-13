const { first } = require('./first.js');

describe("First function tests", () => {
    test('should return empty array when array is null', () => {
        expect(first(null, 3)).toEqual([]);
    });

    test('should return empty array when array is undefined', () => {
        expect(first(undefined, 3)).toEqual([]);
    });

    test('should return empty array when n is negative', () => {
        expect(first([1, 2, 3], -1)).toEqual([]);
    });

    test('should return empty array when n is 0', () => {
        expect(first([1, 2, 3], 0)).toEqual([]);
    });

    test('should return first element when n is null', () => {
        expect(first([1, 2, 3], null)).toBe(1);
    });

    test('should return first element when n is undefined', () => {
        expect(first([1, 2, 3])).toBe(1);
    });

    test('should return first n elements when n is positive', () => {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    test('should return all elements when n exceeds array length', () => {
        expect(first([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    test('should return single element when n is 1', () => {
        expect(first([1, 2, 3], 1)).toEqual([1]);
    });

    test('should work with string arrays', () => {
        expect(first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
    });

    test('should return empty array for empty input array with positive n', () => {
        expect(first([], 3)).toEqual([]);
    });

    test('should return first element (undefined) for empty array when n is null', () => {
        expect(first([], null)).toBeUndefined();
    });

    test('should return first element (undefined) for empty array when n is undefined', () => {
        expect(first([])).toBeUndefined();
    });
});