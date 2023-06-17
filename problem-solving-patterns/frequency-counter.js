function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for (let elem of arr1) {
        frequencyCounter1[elem] = (frequencyCounter1[elem] || 0) + 1;
    }

    for (let elem of arr2) {
        frequencyCounter2[elem] = (frequencyCounter2[elem] || 0) + 1;
    }

    for (let elem of arr1) {
        if (!(elem ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[elem ** 2] !== frequencyCounter1[elem]) {
            return false;
        }
    }
    return true;
}

const arr1 = [2,3,5];
const arr2 = [4,9,25];

// same(arr1, arr2)
console.log(same(arr1, arr2));