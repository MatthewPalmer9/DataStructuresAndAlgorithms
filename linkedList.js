function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

module.exports = function LList() {
    this.head = new Node("head");
    this.find = find;
    this.findLast = findLast;
    // this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.dispReverse = dispReverse;

    function insert(newElement, item) {
        // should insert a new element in front of an existing element in the linked list
        const newNode = new Node(newElement); // create new node with newElement
        const current = this.find(item); // find the node you want to link after
        newNode.next = current.next; // newNode.next should be assigned to current.next, whatever that may be
        newNode.previous = current; // newNode.previous should be assigned to current
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

    // .findPrevious() no longer needed
    // function findPrevious(item) {
    //     // should return the node behind the queried item
    //     let currNode = this.head;
    //     while(!(currNode.next == null) && (currNode.next.element != item)) { // while currNode is not null & currNode.next.element is not the 
    //         currNode = currNode.next;                                        // item we are looking for.
    //     }
    //     return currNode;
    // }

    function remove(item) {
        // should remove a node from our list
        let currNode = this.find(item);
        if(!(currNode.next == null)) { // if the node in front of this one points back to it (exists)...
            currNode.previous.next = currNode.next; // point prev node to next node, forget this node
            currNode.next.previous = currNode.previous; // point next node to prev node, forget this node
            currNode.next = null;       // ...Make current node... //
            currNode.previous = null; // ...forget other nodes... //
        };
        
        return (currNode.next == null && currNode.previous == null) ? true : false;
    };

    function dispReverse() {
        let currNode = this.head;
        let str = "";
        currNode = this.findLast();
        while(!(currNode.previous == null)) {
            str += currNode.element + " => "
            currNode = currNode.previous;
        }
        str += this.head.element;
        return str;
    }

    /**
     * HELPERS / UTILs
     */

    function find(item) {
        let currNode = this.head;
        while(currNode.element != item) {
            if(currNode.next == null) { return null };
            currNode = currNode.next;
        }
        return currNode;
    }

    function findLast() { // finds the last node in our linked list
        let currNode = this.head;
        while(!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }
}