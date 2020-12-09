const { performance } = require('perf_hooks');
// Calculate sum of all numbers upto n

// 1
function addUpto (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) { 
        total += i;
    };
    return total
}

var t1 = performance.now();
addUpto(1000000000);
var t2 = performance.now();
console.log(`Time elapsed ${(t2 - t1) / 1000} seconds`)

function addUpto2 (n) {
    return n * (n + 1) / 2;
}

var t3 = performance.now();
addUpto2(1000000000);
var t4 = performance.now();
console.log(`Time elapsed ${(t4 - t3) / 1000} seconds`)