function sort (arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i-1; j >= 0 && arr[j] > currentVal; j--){
            console.log(arr[j+1], arr[j]);
            console.log(arr);
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }

    return arr;
}

console.log(sort([2,1,9,76,4]));

// Time complexity
// Best - O(n)
// Average - (On2)
// Worst - (On2)

//Space complexity - O(1)