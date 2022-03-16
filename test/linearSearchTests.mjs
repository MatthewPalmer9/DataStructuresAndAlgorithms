import chai, { expect } from 'chai';
import linearSearch from '../linearSearch.js';

chai.should();

describe('linearSearch function', () => {
    const numDictionary = {0: 22, 1: 45, 2: 68, 3: 89, 4: 124, 5: 145, 6: 184};

    it('should return the value indexed', () => {
        expect(linearSearch(numDictionary, 89)).to.equal(89);
        expect(linearSearch(numDictionary, 124)).to.equal(124);
    });

    it('should fail when indexing a number (or any value) that is not inside the dictionary', () => {
        expect(linearSearch(numDictionary, 444)).to.be.false;
        expect(linearSearch(numDictionary, "hello")).to.be.false;
        expect(linearSearch(numDictionary, "44")).to.be.false;
        expect(linearSearch(numDictionary, true)).to.be.false
    });
});