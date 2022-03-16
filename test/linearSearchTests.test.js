const linearSearch = require('../linearSearch.js');


describe('linearSearch function', () => {
    const numDictionary = {0: 22, 1: 45, 2: 68, 3: 89, 4: 124, 5: 145, 6: 184};

    it('should return the value indexed', () => {
        expect(linearSearch(numDictionary, 89)).toEqual(89);
        expect(linearSearch(numDictionary, 124)).toEqual(124);
    });

    it('should fail when indexing a number (or any value) that is not inside the dictionary', () => {
        expect(linearSearch(numDictionary, 444)).toBe(false);
        expect(linearSearch(numDictionary, "hello")).toBe(false);
        expect(linearSearch(numDictionary, "44")).toBe(false);
        expect(linearSearch(numDictionary, true)).toBe(false);
    });
});