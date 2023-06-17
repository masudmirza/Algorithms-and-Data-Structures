function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

const arr = [3,5,8,4,9,2];
console.log(maxSubarraySum(arr,3));

function maxSubarraySum2(arr, num) {
    if (arr.length < num) return null;

    let total = 0;

    for (let i = 0; i < num; i++) {
        total += arr[i];
    }

    let currentTotal = total;

    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num]
        total = Math.max(total, currentTotal);
    }
    return total;
}

console.log(maxSubarraySum2(arr,3));


function minSubArrayLen(arr, num) {
    if (arr.length < num) return null;

    let total = 0;

    for (let i = 0; i < num; i++) {
        total += arr[i];
    }

    let currentTotal = total;

    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num]
        total = Math.max(total, currentTotal);
    }
    return total;
}
