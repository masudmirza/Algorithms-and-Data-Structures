function sumZero (arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]));

function sumZero2 (arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
}

console.log(sumZero2([-4,-3,-2,-1,0,1,2,3,10]));

function isSubsequence(str1, str2) {
    let p1 = 0;
    let p2 = 0;

    while (p2 < str2.length) {
        if (str1[p1] === str2[p2]) {
            p1++;
        }
        if (p1 === str1.length){
            return true;
        }
        else {
            p2++;
        }
    }
    return false;
}

function isSubsequence2(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

  function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }