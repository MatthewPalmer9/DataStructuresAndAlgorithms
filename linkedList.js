function Node(element) {
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
        const newNode = new Node(newElement); // create new node with newElement
        const current = this.find(item); // find the node you want to link after
        newNode.next = current.next; // newNode.next should be assigned to current.next, whatever that may be
        current.next = newNode; // current.next should point to newly inserted node
    }

    function display() {
        // should display all elements in the linked list
        let str = "";
        let currNode = this.head;
        while(!(currNode.next == null)) { // while this node's .next() is not null
            str += currNode.element + " => "
            currNode = currNode.next;
        }
        str += currNode.element
        return str;
    }

    function findPrevious(item) {
        // should return the node behind the queried item
        let currNode = this.head;
        while(!(currNode.next == null) && (currNode.next.element != item)) { // while currNode is not null & currNode element is not the 
            currNode = currNode.next;                                           // item we are looking for.
        }
        return currNode;
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