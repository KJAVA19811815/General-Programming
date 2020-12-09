function areThereDuplicates(...args) {
    let values = Object.values(arguments);

    let counter = {}

    for (let i = 0; i < values.length; i++) {
        counter[values[i]] = (counter[values[i]] || 0) + 1;
    }

    for (let key in counter) {
        if (counter[key] > 1) {
            return true
        }
    }
    return false;
}

console.log(areThereDuplicates(1,2,3)); // false
console.log(areThereDuplicates(1,2,2)); // true
console.log(areThereDuplicates('a','b','c','a')); // false