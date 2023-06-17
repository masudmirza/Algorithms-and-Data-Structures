function capitalizeWords(arr) {
    let newArr = [];

    function helper(input) {
        if (input.length === 0) {
            return;
        }

        newArr.push(input[0].toUpperCase());
        helper(input.slice(1));
    }
    helper(arr);
    return newArr;
}


function capitalizeWords2 (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }

let arr = ['car','taco','banana'];

console.log(capitalizeWords(arr));