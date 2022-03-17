module.exports = function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

    function enqueue(element) {
        // should successfully push an element into the queue
    }

    function dequeue() {
        // should successfully remove an element from the front of a queue
    }

    function front() {
        // should successfully examine and return the element in front of the queue
    }

    function back() {
        // should successfully examine and return the element in the back of the queue
    }

    function toString() {
        // should display all the elements in a queue
    }

    function empty() {
        // should successfully tell us if the queue is empty or not
    }
};