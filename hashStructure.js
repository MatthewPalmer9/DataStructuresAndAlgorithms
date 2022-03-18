module.exports = function HashTable() {
    this.table = new Array(137);
    this.hash = hash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;

    function hash(data) {
        // should return the hash value of passed in data
        const H = 37;
        let total = 0;
        for(let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }
        total = total % this.table.length;
        if(total < 0) {
            total += this.table.length-1;
        }
        return parseInt(total);
    }

    function put(data) {
        // should successfully insert data to the Hash Table
        let pos = this.hash(data);
        this.table[pos] = data;
    }

    function showDistro() {
        // should return each table in the Hash Table
        let n = 0;
        let str = "";
        for(let i = 0; i < this.table.sort().length; i++) {
            if(this.table[i] != undefined && str.length === 0) {
                str += this.table[i];
            } else if(this.table[i] != undefined) {
                str += ", " + this.table[i];
            }
        }
        return str;
    }

    function get(key) {
        return this.table[this.hash(key)];
    }
}