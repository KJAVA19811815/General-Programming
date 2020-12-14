function flatten(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[0])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArray;
}
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3