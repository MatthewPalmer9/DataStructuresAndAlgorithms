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
        return this.dataStore.push(element);
    }

    function dequeue() {
        // should successfully remove an element from the front of a queue
        return this.dataStore.shift();
    }

    function front() {
        // should successfully examine and return the element in front of the queue
        return this.dataStore[0];
    }

    function back() {
        // should successfully examine and return the element in the back of the queue
        return this.dataStore[this.dataStore.length - 1];
    }

    function toString() {
        // should display all the elements in a queue
        let str = "";
        for(let i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[this.dataStore.length - 1] !== this.dataStore[i]) {
                str += this.dataStore[i] + ", ";
            } else {
                str += this.dataStore[i];
            }
        }
        return str;
    }

    function empty() {
        // should successfully tell us if the queue is empty or not
        const queue = this.dataStore;
        return queue.length <= 0 ? true : false;
    }
};