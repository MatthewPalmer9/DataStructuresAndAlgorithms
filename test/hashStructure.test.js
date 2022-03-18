const HashTable = require('../hashStructure.js');

describe('Hash Table', () => {

    let hashTable;
    beforeEach(() => {
        hashTable = new HashTable();
    });

    it('should return the hash value of passed in data', () => {
        expect(hashTable.hash("hello")).toEqual(20);
        expect(hashTable.hash("Raymond")).toEqual(22);
        expect(hashTable.hash("Clayton")).toEqual(58);
    });

    it('should successfully insert data to the Hash Table', () => {
        hashTable.put("Raymond");
        expect(hashTable.table[22]).toEqual("Raymond");
    });

    it('should return each table in the Hash Table', () => {
        hashTable.put("Raymond");
        expect(hashTable.showDistro()).toBe("Raymond");
        hashTable.put("Clayton");
        expect(hashTable.showDistro()).toBe("Clayton, Raymond");
    });

    it('should get the data from the Hash Table', () => {
        hashTable.put("Raymond");
        expect(hashTable.get("Raymond")).toEqual("Raymond");
    });
});