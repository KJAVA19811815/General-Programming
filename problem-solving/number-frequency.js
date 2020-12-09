function sameFrequency (num1, num2) {
    let first = num1.toString();
    let second = num2.toString();

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let i = 0; i < first.length; i++) {
        frequencyCounter1[first[i]] = (frequencyCounter1[first[i]] || 0) + 1
    }
    console.log(frequencyCounter1);
    for (let i = 0; i < second.length; i++) {
        frequencyCounter2[second[i]] = (frequencyCounter2[second[i]] || 0) + 1
    }
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 41)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 2222)); // false