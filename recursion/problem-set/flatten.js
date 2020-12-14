function flatten(arr) {
    let result = [];
    if (arr.length === 0) return result;

    function add (arr) {
        if (arr.length === undefined) {
            return arr
        } else {
            return arr[0];
        }
    }

    console.log(result);

    return result.concat(add(arr.slice(1)));
  
}
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3