import chai, {expect} from 'chai';
import binarySearch from '../binarySearch.js';

chai.should();

describe('binarySearch function', () => {
    const numDictionary = {0: 22, 1: 45, 2: 68, 3: 89, 4: 124, 5: 145, 6: 184};
    it('should return the value indexed', () => {
        expect(binarySearch(numDictionary, 89)).to.equal(89);
        expect(binarySearch(numDictionary, 124)).to.equal(124);
    });

    it('should fail when indexing a number (or any value) that is not inside the dictionary', () => {
        expect(binarySearch(numDictionary, 444)).to.be.false
        expect(binarySearch(numDictionary, "hello")).to.be.false
    });
});