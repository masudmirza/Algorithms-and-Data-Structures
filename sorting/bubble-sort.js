function sort(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function sort2(arr) {
    for (let i=arr.length; i>0; i--) {
        for (let j=0; j<i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function sort3(arr) {
    const swap = (arr,idx1,idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i=arr.length; i>0; i--) {
        for (let j=0; j<i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

function sort4(arr) {
    let noSwaps;
    const swap = (arr,idx1,idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i=arr.length; i>0; i--) {
        noSwaps = true;
        for (let j=0; j<i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }
    return arr;
}

console.log(sort4([6,5,7,10,3,11]));

// Time complexity
// Best - O(n)
// Average - (On2)
// Worst - (On2)

//Space complexity - O(1)