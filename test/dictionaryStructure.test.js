const Dictionary = require('../dictionaryStructure.js');

describe('Dictionary', () => {

    let dict;
    beforeEach(() => {
        dict = new Dictionary();
        dict.add("name", "James");
    });

    it('should successfully add an element to the dictionary', () => {
        expect(dict.dataStore["name"]).toBe("James");
    });

    it('should successfully find an item by its key', () => {
        expect(dict.find("name")).toBe("James");
    });

    it('should successfully remove an item by its key', () => {
        dict.remove("name");
        expect(dict.dataStore["name"]).toBe(undefined);
    });

    it('should successfully showAll key/value pairs in the dictionary', () => {
        expect(dict.showAll()).toBe("name: James");
        dict.add("name2", "John");
        expect(dict.showAll()).toBe("name: James, name2: John");
    });

    it('should successfully return the count of items in our dictionary', () => {
        expect(dict.count()).toEqual(1);
        dict.add("name2", "John");
        expect(dict.count()).toEqual(2);
    });

    it('should successfully clear the dictionary of all key/value pairs', () => {
        dict.clear();
        expect(dict.count()).toEqual(0);
    });
});