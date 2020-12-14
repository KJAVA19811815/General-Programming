function collectStrings (obj, result = []) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      collectStrings(obj[key], result)
    } else if (typeof obj[key] === "string") {
      result.push(obj[key])
    }
  }
  return result;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])