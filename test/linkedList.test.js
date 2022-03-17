const LList = require('../linkedList.js');

describe('LinkedList', () => {

    let list;
    beforeEach(() => {
        list = new LList();
        list.insert("James", "head");
        list.insert("Steven", "James");
    });

    it('should insert a new element in front of an existing element in the linked list', () => {
        expect(list.head.next).toEqual(list.find("James"));
    });

    it('should display all elements in the linked list', () => {
        expect(list.display()).toEqual("head => James => Steven");
    });

    it('should return the node behind the queried item', () => {
        expect(list.findPrevious("Steven")).toEqual(list.find("James"));
    });

    it('should remove a node from the list', () => {
        list.remove("Steven");
        expect(list.find("James").next).toBe(null);
    });
});