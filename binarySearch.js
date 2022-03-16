export const numArr = {
    0: 5, 1: 26, 2: 45, 3: 91, 4: 117, 5: 161, 6: 178, 
    7: 201, 8: 245, 9: 293, 10: 320, 11: 341, 12: 384, 13: 412, 
    14: 417, 15: 502, 16: 561, 17: 648, 18: 662, 19: 675, 20: 723, 
    21: 746, 22: 749, 23: 766, 24: 816, 25: 820, 26: 821, 27: 834, 
    28: 887, 29: 955, 30: 987, 31: 998
};

export default function binarySearch(listData, value) {
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

binarySearch(numArr, 766);
