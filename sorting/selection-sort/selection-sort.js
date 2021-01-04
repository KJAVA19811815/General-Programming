function selectionSort (arr) {

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    console.log(arr)
    console.log("SWAPPING")
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
    console.log(arr);
    console.log("-----------")
  }
  return arr;
}

console.log(selectionSort([19,44,38,5,47,15]));