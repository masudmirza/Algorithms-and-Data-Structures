function search(long,short) {
    let count = 0;

    if (long.length < short.length) return false;

    for (let i=0; i<long.length; i++) {
        for (let j=0; j<short.length; j++) {
            if (short[j] !== long[i+j]) {
                break;
            }
            if (j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

let long = 'awomglowomg';
let short = 'omg';

console.log(search(long,short));