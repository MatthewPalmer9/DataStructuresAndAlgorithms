import chai, { expect } from 'chai';
import List from '../List.js';

chai.should();

describe('List Class', () => {
    let list;
    beforeEach(() => {
        list = new List().to_list(["a", "b", "c"]);
    });
    
    it('should initialize with a listSize of 3', () => {
        expect(list.listSize).to.equal(3);
    });

    it('should successfully add an element with the .append() method', () => {
        list.append("d");
        expect(list.dataStore).to.contain("d");
    });
    
    it('should remove an element from the list using the .remove() method', () => {
        list.append("d");
        expect(list.remove("d")).to.be.true;
        expect(list.dataStore).to.eql(["a", "b", "c"]);
    });

    it('should transform an array to a list using the .to_list() method', () => {
        const list2 = new List().to_list([1,2,3]);
        expect(list2.dataStore).to.eql(([1,2,3]));
    });

    it('should transform a list into an array using .to_a() method', () => {
        const list3 = new List();
        expect(list3.to_list([]).to_a()).to.eql([]);
        expect(list3.to_list(["a", "b", "c"]).to_a()).to.eql(["a", "b", "c"])
    });

    it('should return the length of the list using the .length() method', () => {
        expect(list.length()).to.equal(3);
    });

    it('should transform the list into a string using the .toString() method', () => {
        expect(list.toString()).to.equal("a,b,c");
    });

    it('should insert an element to a specific place in the list', () => {
        expect(list.insert("d", "b")).to.be.true;
        expect(list.dataStore).to.eql(["a", "b", "d", "c"]);
    });

    it('should clear the list when using the .clear() method', () => {
        list.clear();
        expect(list.dataStore).to.eql([]);
        expect(list.listSize).to.equal(0);
    });

    it('should return true if .contains() method finds the element in the list', () => {
        expect(list.contains("b")).to.be.true;
    });
    
    it('should return false if .contains() method does not find the element in the list', () => {
        expect(list.contains("x")).to.be.false;
    });

    it('should bring our position back to the front of the list when using the .front() method', () => {
        expect(list.currPos()).to.equal(0);
        list.next();
        list.next();
        expect(list.currPos()).to.equal(2);
        list.front();
        expect(list.currPos()).to.equal(0);
    });
    
    it('should bring our position to the back of the list when using the .end() method', () => {
        expect(list.currPos()).to.equal(0);
        list.end();
        expect(list.currPos()).to.equal(2);
    });

    it('should increment the current position using the .next() method', () => {
        list.next();
        expect(list.currPos()).to.equal(1);
    });

    it('should decrement the current position using the .prev() method', () => {
        list.next();
        list.next();
        list.prev();
        expect(list.currPos()).to.equal(1);
    });

    it('should move our position in the list using the .moveTo() method', () => {
        list.moveTo(2);
        expect(list.currPos()).to.equal(2);
    });

    it('should find the position using the .find(element) method', () => {
        expect(list.find("b")).to.equal(1);
    });

    it('should get the list item in current position using the .getElement() method', () => {
        expect(list.getElement()).to.equal("a");
    });
});