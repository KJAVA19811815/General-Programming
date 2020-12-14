function nestedEvenSum (val, sum = 0) {
  for (let key in val) {
    if (typeof val[key] === "object") {
      sum += nestedEvenSum(val[key])
    } else if (typeof val[key] === "number") {
      sum += val[key]     
    }
  }
  return sum;
}


var obj1 = {
  outer: 1,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 3,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
// nestedEvenSum(obj2); // 10