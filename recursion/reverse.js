function reverse(str) {
    let result = '';

    function helper(input) {
        if (input.length === 0) {
            return 0;
        }

        result += input.slice(-1);

        helper(input.slice(0, -1));
    }
    helper(str);
    return result;
}

console.log(reverse('hello'));

// console.log('slice'.slice(0,-1));