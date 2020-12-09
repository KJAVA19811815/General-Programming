function sameAnagram (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for ( let i = 0; i < str1.length; i++) {
        frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1
    }

    for ( let j = 0; j < str2.length; j++) {
        frequencyCounter2[str2[j]] = (frequencyCounter2[str2[j]] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key in  frequencyCounter2)) {
            return false
        }

        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(sameAnagram("m",""));
console.log(sameAnagram("anagram","nagaram"));
console.log(sameAnagram("rat","car"));
console.log(sameAnagram("texttwisttime","timetexttwist"));
