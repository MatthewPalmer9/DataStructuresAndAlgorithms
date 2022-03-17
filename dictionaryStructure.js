module.exports = function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;

    function add(key, value) {
        // should successfully add a key/value pair to the dictionary
    }

    function find(key) {
        // should successfully find a value by its key
    }

    function remove(key) {
        // should successfully remove a value by its key
    }

    function showAll () {
        // should show all items in the dictionary
    }
}