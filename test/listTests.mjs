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

    it('should successfully add an element with the append() method', () => {
        list.append("d");
        expect(list.dataStore).to.contain("d");
    });
    
    it('should remove an element from the list using the remove() method', () => {
        list.append("d");
        expect(list.remove("d")).to.be.true;
        expect(list.dataStore).to.eql(["a", "b", "c"]);
    });

    it('should transform an array to a list using the to_list() method', () => {
        const list2 = new List().to_list([1,2,3]);
        expect(list2.dataStore).to.eql(([1,2,3]));
    });

    it('should transform a list into an array using to_a() method', () => {
        const list3 = new List();
        expect(list3.to_list([]).to_a()).to.eql([]);
        expect(list3.to_list(["a", "b", "c"]).to_a()).to.eql(["a", "b", "c"])
    });

    it('should return the length of the list using the length() method', () => {
        expect(list.length()).to.equal(3);
    });
});