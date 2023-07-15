function hash(key, arrLen) {
    let total = 0;

    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrLen;
    }

    return total;
}


function improvedHash(key, arrLen) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrLen;
    }

    return total;
}

// console.log(hash("pink", 10));
// console.log(hash("orangered", 10));
// console.log(hash("cyan", 10));

// console.log(improvedHash("hello", 13));
// console.log(improvedHash("bye", 13));
// console.log(improvedHash("hi", 13));


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash (key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set (key, value) {
        let index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
    }

    get (key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i=0; i<this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i];
                }
            }
        }
        return undefined;
    }

    values () {
        let valuesArr = [];

        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }

        return valuesArr;
    }

    keys () {
        let keysArr = [];

        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }

        return keysArr;
    }
}


let ht = new HashTable();
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('mediumvioletred', '#C71585');
console.log(ht);
console.log(ht.get('plum'));
console.log(ht.values());
console.log(ht.keys());


// Insertion - O(1)
// Deletion - O(1)
// Access - O(1)