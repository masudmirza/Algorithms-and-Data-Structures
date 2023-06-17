function same(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const obj = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        obj[letter] ? obj[letter] +=1 : obj[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        
        if (!obj[letter]) {
            return false;
        } else {
            obj[letter] -= 1;
        }
    }

    return true;
}

const str1 = 'mesud';
const str2 = 'dusem';
console.log(same(str1,str2));