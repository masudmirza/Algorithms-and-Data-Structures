function search (arr, val) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

const sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(search(sortedArray, 4));

function search2 (arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElem = arr[middle];

        if (currentElem < val) {
            min = middle + 1;
        } else if (currentElem > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(search2(sortedArray, 4));
