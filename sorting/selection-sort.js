function sort (arr) {
    for (let i=0; i<arr.length;i++) {
        let lowest = i;

        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
console.log('test');

function sort2 (arr) {
    const swap = (arr,idx1,idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i=0; i<arr.length;i++) {
        let lowest = i;

        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr,i,lowest);
    }
    return arr;
}

console.log(sort([34,22,10,19,17]));

// Time complexity
// Best - O(n2)
// Average - (On2)
// Worst - (On2)

//Space complexity - O(1)