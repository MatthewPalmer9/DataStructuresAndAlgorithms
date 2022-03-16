const binarySearch = require('../binarySearch.js');

describe('binarySearch function', () => {
    const numDictionary = {0: 22, 1: 45, 2: 68, 3: 89, 4: 124, 5: 145, 6: 184};
    it('should return the value indexed', () => {
        expect(binarySearch(numDictionary, 89)).toEqual(89);
        expect(binarySearch(numDictionary, 124)).toEqual(124);
    });

    it('should fail when indexing a number (or any value) that is not inside the dictionary', () => {
        expect(binarySearch(numDictionary, 444)).toBe(false);
        expect(binarySearch(numDictionary, "hello")).toBe(false);
    });
});