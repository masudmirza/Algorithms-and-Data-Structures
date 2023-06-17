function isPalindrome(str) {
    let result = '';

    function helper(input) {
        if (input.length === 0) {
            return 0;
        }

        result += input.slice(-1);

        helper(input.slice(0, -1));
    }
    helper(str);
    if (result === str) {
        return true;
    }
    return false;
}

console.log(isPalindrome('tacocat'));