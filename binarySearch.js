// good for operations that require searches, like finding the min & max of a data set

module.exports = function binarySearch(listData, value) {
    let low = 0;
    let high = Object.keys(listData).length;

    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        
        if(listData[mid] == value) {
            return listData[mid];
        } else if(listData[mid] < value) {
            low = mid + 1;
        } else if(listData[mid] > value) {
            high = mid - 1;
        } else {
            return false
        }
    }

    console.log(listData[23]);
}