var obj1 = {
    outer: 8,
    obj: {
      inner: 6,
      otherObj: {
        superInner: 4,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
//   console.log(Object.keys(obj1));

function nestedEvenSum(obj) {
    let result = 0;
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        result += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
        result += obj[key];
      }
    }
    return result;
  }

  console.log(nestedEvenSum(obj1));
