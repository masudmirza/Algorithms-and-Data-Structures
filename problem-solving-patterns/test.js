function test(num1,num2) {
    const arr1 = Array.from(String(num1), Number);
    const arr2 = Array.from(String(num2), Number);

    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounterArr1 = {};
    let frequencyCounterArr2 = {};

    for (let elem of arr1) {
        frequencyCounterArr1[elem] = (frequencyCounterArr1[elem] || 0) + 1;
    }

    for (let elem of arr2) {
        frequencyCounterArr2[elem] = (frequencyCounterArr2[elem] || 0) + 1;
    }

    for (let key in frequencyCounterArr1) {
        if (frequencyCounterArr2[key] !== frequencyCounterArr1[key]) {
            return false;
        }
    }
    return true;
}

console.log(test(133,123));


function areThereDuplicates (...nums) {
    let frequencyCounter = {};

    for (const elem of nums) {
        frequencyCounter[elem] = (frequencyCounter[elem] || 0) + 1;
    }

    console.log(frequencyCounter);

    for (const key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1,2,3,3));

function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
  }