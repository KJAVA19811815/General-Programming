function maxSubArray(arr,num) {
    if (num > arr.length){
        return null;
    }
    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        console.log("TEMP",temp)
        if (temp > max) {
            max = temp;
        }
    }
    return max;

}

// console.log(maxSubArray([1,2,5,2,8,1,5],2));

function maxSubArraySum (arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (num > arr.length) return null

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([4,2,3,4,6,9,3,6], 2))


