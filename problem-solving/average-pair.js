// function averagePair(array,num){
//     if (array.length == 0) return false

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if ( (array[i] + array[j]) / 2 === num) {
//                 return true
//             }
//         }
//     }
//     return false
// }

function averagePair(array, num) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let result = array[left] + array[right] / 2

        if (result === num) {
            return true
        } else if (result < num) {
            left++
        } else {
            right--
        }
    }

    return false;
}



console.log(averagePair([1,2,3],2.5));
console.log(averagePair( [1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6],4.1));
console.log(averagePair([],4));