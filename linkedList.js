function Node() {
    this.element = element;
    this.next = null;
}

module.exports = function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;

    function insert(newElement, item) {
        // should insert a new element in front of an existing element in the linked list
    }

    function display() {
        // should display all elements in the linked list
    }

    function findPrevious(item) {
        // should return the node behind the queried item
    }

    function remove(item) {
        // should remove a node from our list
    }

    /**
     * HELPERS
     */

    function find(item) {
        let currNode = this.head;
        while(currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
}