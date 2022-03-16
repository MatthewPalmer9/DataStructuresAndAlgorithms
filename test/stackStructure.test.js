const List = require("../List");
const Stack = require("../stackStructure");

describe('Stack', () => {

    let stack;
    beforeEach(() => {
        stack = new Stack();
        stack.push("Jack");
        stack.push("Steven")
    });
    
    it('should successfully push an element to the top of the stack', () => {
        stack.push("James");
        expect(list.dataStore[1]).toBe("James");
    });

    it('should successfully peek at the element below the top of the stack', () => {
        expect(stack.peek()).toBe("Jack");
    });

    it('should successfully pop the top element from the stack', () => {
        expect(stack.pop()).toBe("Steven");
    });

    it('should successfully clear() the stack', () => {
        stack.clear();
        expect(stack.top).toBe(0);
    });
});