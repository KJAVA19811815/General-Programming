function capitalizeFirst (arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      let first = arr[i];
      let capitalize = first.charAt(0).toUpperCase();
      let newFirst = capitalize + first.slice(1);
      console.log(newFirst);
      newArray.push(newFirst);
    }
    return newArray;
}

console.log(capitalizeFirst(['car','taco','banana']));
