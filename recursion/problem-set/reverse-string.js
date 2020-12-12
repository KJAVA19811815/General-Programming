function reverse(string) {
  let result = "";

  if (string.length === 0) return result;

  let length = string.length;

  result = string[length - 1];

  return result.concat(reverse(string.slice(0,length - 1)));
}

console.log(reverse('awesome'));
console.log(reverse('ageofultron'));