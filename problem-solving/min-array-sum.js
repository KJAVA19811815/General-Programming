function minSubArrayLen (array, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < array.length) {
        if (total < sum && end < array.length) {
            total += array[end];
            end++;
        } else if (total >= sum) {
            minLen = Math.min(minLen, end-start);
			total -= array[start];
			start++;
        } else {
            break;
        } 
    }
    console.log(total);

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3],7));