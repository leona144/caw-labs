const { last } = require('./last.js');

describe("Last function tests", () => {
    test('should return empty array when array is null', () => {
        expect(last(null, 3)).toEqual([]);
    });

    test('should return empty array when array is undefined', () => {
        expect(last(undefined, 3)).toEqual([]);
    });

    test('should return last element when n is null', () => {
        expect(last([1, 2, 3], null)).toBe(3);
    });

    test('should return last element when n is undefined', () => {
        expect(last([1, 2, 3])).toBe(3);
    });

    test('should return last n elements when n is positive', () => {
        expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    });

    test('should return all elements when n exceeds array length', () => {
        expect(last([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    test('should return empty array when n is 0', () => {
        expect(last([1, 2, 3], 0)).toEqual([]);
    });

    test('should return empty array when n is negative', () => {
        expect(last([1, 2, 3], -1)).toEqual([]);
    });

    test('should return single element when n is 1', () => {
        expect(last([1, 2, 3], 1)).toEqual([3]);
    });

    test('should work with string arrays', () => {
        expect(last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
    });

    test('should return empty array for empty input array', () => {
        expect(last([], 3)).toEqual([]);
    });

    test('should return undefined for empty array when n is null', () => {
        expect(last([], null)).toBeUndefined();
    });

    test('should handle single element array correctly', () => {
        expect(last([42], null)).toBe(42);
        expect(last([42], 1)).toEqual([42]);
        expect(last([42], 2)).toEqual([42]);
    });
});