function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }

let arr = [1, [2, [3, 4], [[5]]]];
console.log(flatten(arr));
// console.log(arr.toString());


// let a = arr.toString()
// console.log(a);
// console.log(arr);
// console.log(a.length);




// const flatten = arr.flat(3);
// console.log(flatten);
// console.log(Array.isArray(arr));
// console.log(arr.reduce((a,b) => a.concat(b),[]));