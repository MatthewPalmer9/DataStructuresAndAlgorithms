const LList = require('../linkedList.js');

describe('LinkedList', () => {

    let list;
    beforeEach(() => {
        list = new LList();
        list.insert("James", "head");
        list.insert("Steven", "James");
    });
    
    it('should insert a new element in front of an existing element in the linked list', () => {
        list.insert("Tom", "Steven");
        expect(list.head.next.next.next.element).toEqual("Tom");
    });

    it('should display all elements in the linked list', () => {
        expect(list.display()).toEqual("head => James => Steven");
    });

    // .findPrevious() no longer needed in a doubly linked list
    // it('should return the node behind the queried item', () => {
    //     expect(list.findPrevious("Steven")).toEqual(list.find("James"));
    // });

    it('should display our list in reverse', () => {
        expect(list.dispReverse()).toBe("Steven => James => head");
    });

    it('should find the node by element name', () => {
        expect(list.find("Steven")).toBe(list.head.next.next);
    });

    it('should find the last node in our list', () => {
        expect(list.findLast()).toBe(list.head.next.next);
    });

    it('should remove a node from the list', () => {
        expect(list.remove("James")).toBe(true);
        expect(list.find("James")).toBe(null);
        expect(list.find("Steven").previous).toBe(list.head);
    });
});