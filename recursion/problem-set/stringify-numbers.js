function stringify (obj, result = "") {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result += stringify(obj[key])
    } else if (typeof obj[key] === "number") {
      result += obj[key].toString()
    }
  }
  return result;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringify(obj));


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/