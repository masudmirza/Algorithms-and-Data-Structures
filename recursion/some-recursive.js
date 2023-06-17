const isOdd = val => val % 2 !== 0;

// console.log(isOdd(1));

function someRecursive(arr, isOdd) {
    let result = [];
    function helper(input) {
        if (input.length === 0) {
            return;
        }

        // result.push(input[0]);
        if (isOdd(input[0]) === true) return true;
        helper(input.slice(1));
    }

    helper(arr);
    return false;
}

console.log(someRecursive([1,4,6,8],isOdd));