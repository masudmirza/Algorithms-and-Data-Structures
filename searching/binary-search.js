function binarySearch(arr,val) {
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

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 8));


function binarySearch2(arr, target){
    // add whatever parameters you deem necessary - good luck!
      let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      }
      if (arr[mid] < target) {
        left = mid + 1;
      }
      if (arr[mid] > target) {
        right = mid - 1;
      }
    }
    return -1;
  }

  console.log(binarySearch2([1,2,3,4,5,6,7,8,9], 8));


function binarySearch3(arr,elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end / 2));

    while (arr[middle] !== elem && start < end) { 
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

console.log(binarySearch3([1,2,3,4,5,6,7,8,9], 8));
