function capitalizedWords (arr) {
  let result = [];
  if (arr.length === 0) return result;
  let capital = arr[0].toUpperCase();
  result.push(capital);
  return result.concat(capitalizedWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']