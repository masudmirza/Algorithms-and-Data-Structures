const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

function collectStrings(obj) {
    let arr = [];

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            arr.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            arr = arr.concat(collectStrings(obj[key]));
        }
    }

    return arr;
}

console.log(collectStrings(obj));


// with helper method

function collectStrings2(obj) {
    let arr = [];

    function helper(input) {
        if (input.length === 0) {
            return;
        }

        for (let key in input) {
            if (typeof input[key] === 'string') {
                arr.push(input[key]);
            } else if (typeof input[key] === 'object') {
                return helper(input[key]);
            }
        }
    }

    helper(obj);
    return arr;
}

console.log(collectStrings2(obj));
