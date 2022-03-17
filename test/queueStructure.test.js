const Queue = require('../queueStructure.js');

describe('Queue', () => {

    let q;
    beforeEach(() => {
        q = new Queue();
        q.enqueue("Task1");
        q.enqueue("Task2");
    });

    it('should successfully push an item into the queue', () => {
        q.enqueue("Task3");
        expect(q.dataStore[2]).toEqual("Task3");
    });

    it('should successfully remove an item from the queue', () => {
        q.dequeue();
        expect(q.dataStore[q.dataStore.length - 1]).toEqual("Task2");
    });

    it('should successfully examine and report the first element in queue', () => {
        expect(q.front()).toEqual("Task1");
    });

    it('should successfully examine and report the last element in queue', () => {
        expect(q.back()).toEqual("Task2");
    });

    it('should successfully return a string of all elements in queue', () => {
        expect(q.toString()).toEqual("Task1, Task2");
    });

    it('should successfully return false if items are in queue', () => {
        expect(q.empty()).toBe(false);
    });
    
    it('should successfully return true if queue is empty', () => {
        q.dequeue();
        q.dequeue();
        expect(q.empty()).toBe(true);
    });
});