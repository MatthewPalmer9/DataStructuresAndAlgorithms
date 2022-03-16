const List = require("../List.js");

describe('List Class', () => {
    let list;
    beforeEach(() => {
        list = new List().to_list(["a", "b", "c"]);
    });
    
    it('should initialize with a listSize of 3', () => {
        expect(list.listSize).toEqual(3);
    });

    it('should successfully add an element with the .append() method', () => {
        list.append("d");
        expect(list.dataStore).toContain("d");
    });
    
    it('should remove an element from the list using the .remove() method', () => {
        list.append("d");
        expect(list.remove("d")).toBe(true);
        expect(list.dataStore).toEqual(["a", "b", "c"]);
    });

    it('should transform an array to a list using the .to_list() method', () => {
        const list2 = new List().to_list([1,2,3]);
        expect(list2.dataStore).toEqual(([1,2,3]));
    });

    it('should transform a list into an array using .to_a() method', () => {
        const list3 = new List();
        expect(list3.to_list([]).to_a()).toEqual([]);
        expect(list3.to_list(["a", "b", "c"]).to_a()).toEqual(["a", "b", "c"])
    });

    it('should return the length of the list using the .length() method', () => {
        expect(list.length()).toEqual(3);
    });

    it('should transform the list into a string using the .toString() method', () => {
        expect(list.toString()).toEqual("a,b,c");
    });

    it('should insert an element to a specific place in the list', () => {
        expect(list.insert("d", "b")).toBe(true);
        expect(list.dataStore).toEqual(["a", "b", "d", "c"]);
    });

    it('should clear the list when using the .clear() method', () => {
        list.clear();
        expect(list.dataStore).toEqual([]);
        expect(list.listSize).toEqual(0);
    });

    it('should return true if .contains() method finds the element in the list', () => {
        expect(list.contains("b")).toBe(true);
    });
    
    it('should return false if .contains() method does not find the element in the list', () => {
        expect(list.contains("x")).toBe(false);
    });

    it('should bring our position back to the front of the list when using the .front() method', () => {
        expect(list.currPos()).toEqual(0);
        list.next();
        list.next();
        expect(list.currPos()).toEqual(2);
        list.front();
        expect(list.currPos()).toEqual(0);
    });
    
    it('should bring our position to the back of the list when using the .end() method', () => {
        expect(list.currPos()).toEqual(0);
        list.end();
        expect(list.currPos()).toEqual(2);
    });

    it('should increment the current position using the .next() method', () => {
        list.next();
        expect(list.currPos()).toEqual(1);
    });

    it('should decrement the current position using the .prev() method', () => {
        list.next();
        list.next();
        list.prev();
        expect(list.currPos()).toEqual(1);
    });

    it('should move our position in the list using the .moveTo() method', () => {
        list.moveTo(2);
        expect(list.currPos()).toEqual(2);
    });

    it('should find the position using the .find(element) method', () => {
        expect(list.find("b")).toEqual(1);
    });

    it('should get the list item in current position using the .getElement() method', () => {
        expect(list.getElement()).toEqual("a");
    });
});