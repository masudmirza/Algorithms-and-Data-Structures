function capitalizeFirst(arr){
    let newArr = [];
    for (let i = 0; i<arr.length; i++){
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr;
}

function capitalizeFirst2(arr) {
    let newArr = [];

    function helper(input) {
        if (input.length === 0) {
            return;
        }
        let firstLetter = input[0].charAt(0).toUpperCase();
        let otherLetters = input[0].slice(1);
        newArr.push(firstLetter + otherLetters);
        helper(input.slice(1));
    }
    helper(arr);
    return newArr;
}

function capitalizeFirst3 (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }
  
let arr = ['car','taco','banana'];

// console.log(capitalizeFirst(arr));
// console.log(capitalizeFirst2(arr));
// console.log(capitalizeWords(arr));

console.log(arr.slice(1,2));