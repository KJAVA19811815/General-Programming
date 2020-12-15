function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    console.log("Array", arr);
    console.log("Middle", middle);

    if (arr.length === 1) return middle

    if (num > arr[middle]) {
        return binarySearch(arr.slice(middle, right + 1), num)
    } else if (num < arr[middle]) {
        return binarySearch(arr.slice(left, middle), num)
    } else {
        return -1
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 11));