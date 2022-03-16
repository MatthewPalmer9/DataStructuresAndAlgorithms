module.exports = function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;

    function push(element) {
        // should push element to the top of the stack.
        this.dataStore[this.top++] = element;
    }

    function pop() {
        // should pop elment from the top of the stack
        return this.dataStore[this.dataStore.length - 1];
    }

    function peek() {
        // should return the element right below the top element
        return this.dataStore[this.top-1];
    }

    function length() {
        // should return the value of top
    }

    function clear() {
        // should clear the stack
        this.top = 0;
    }
}