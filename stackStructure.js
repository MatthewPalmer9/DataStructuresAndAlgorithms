module.exports = function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;

    function push(element) {
        // should push element to the top of the stack.
    }

    function pop() {
        // should pop elment from the top of the stack
    }

    function peek() {
        // should return the element right below the top element
    }

    function length() {
        // should return the value of top
    }

    function clear() {
        // should clear the stack
    }
}