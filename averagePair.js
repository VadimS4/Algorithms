// Given an input of an array of numbers, and a number, check if any pairs of numbers from the array are equal to the number given.
// Algorithm solved using pointers to keep the time complexity down.

function averagePair(numArr, num) {
    let start = 0;
    let end = numArr.length - 1;

    while (start < end) {
        let average = (numArr[start] + numArr[end]) / 2;

        if (average == num) {
            return true;
        } else if (average < num) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}

// averagePair([1,2,3],2.5);
// averagePair([1,3,3,5,6,7,10,12,19],8);