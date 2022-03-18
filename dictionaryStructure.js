module.exports = function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;

    function add(key, value) {
        this.dataStore[key] = value;
    }

    function find(key) {
        return this.dataStore[key];
    }

    function remove(key) {
        delete this.dataStore[key];
    }

    function showAll () {
        let str = "";
        for(key of Object.keys(this.dataStore).sort()) {
            str.length == 0 ?
            str += (key + ": " + this.dataStore[key]) : str += (", " + key + ": " + this.dataStore[key]); 
        }
        return str;
    }

    function count() {
        let n = 0;
        for(key of Object.keys(this.dataStore)) {
            n++;
        };
        return n;
    };

    function clear() {
        for(key of Object.keys(this.dataStore)) {
            delete this.dataStore[key];
        };
    };
};