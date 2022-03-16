export default function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert; // adding to a specific spot in the list
    this.append = append; // adding to the end
    this.remove = remove;
    this.to_list = to_list;
    this.to_a = to_a;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;

    function append(element) {
        this.dataStore[this.listSize++] = element;
    };

    function remove(element) {
        var foundAt = this.find(element);
        if(foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    };

    function to_list(array) {
        let list = new List();
        array.forEach((val) => {
            list.append(val)
        });
        return list
    }

    function to_a() {
        let array = [];
        this.dataStore.forEach((val) => {
            array.push(val);
        });

        return array;
    }

    function length() {
        return this.listSize;
    };

    function toString() {
        return this.dataStore.toString();
    };

    function insert(element, after) {
        let insertPos = this.find(after);
        if(insertPos > -1) {
            this.dataStore.splice(insertPos+1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    };

    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    };

    function contains(element) {
        for(let i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    }

    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize-1;
    }

    function prev() {
        if(this.pos > 0) {
            this.pos--;
        }
    }

    function next() {
        if(this.pos < this.listSize-1) {
            this.pos++;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }

    /**
     * HELPER
     */
    function find(element) {
        for(let i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] == element) {
                return i;
            }
        }

        return -1;
    }
}