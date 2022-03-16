const Stack = require("../stackStructure");

describe('Stack', () => {

    let stack;
    beforeEach(() => {
        stack = new Stack();
        stack.push("Jack");
        stack.push("Steven");
    });
    
    it('should successfully push an element to the top of the stack', () => {
        expect(stack.dataStore[0]).toBe("Jack");
    });

    it('should successfully peek at the element below the top of the stack', () => {
        expect(stack.peek()).toBe("Steven");
    });

    it('should successfully pop the top element from the stack', () => {
        expect(stack.pop()).toBe("Steven");
    });

    it('should successfully return th length of the stack', () => {
        expect(stack.length()).toBe(2);
    });

    it('should successfully clear() the stack', () => {
        stack.clear();
        expect(stack.top).toBe(0);
    });
});