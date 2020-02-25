// Algorithm solved using the Frequency Counter method.

function sameFrequency(num1, num2) {

    let numCounter = {};
    let numCounter2 = {};

    for (let num of num1.toString()) {
        if (numCounter[num]) {
            numCounter[num]++
        } else {
            numCounter[num] = 1
        }
    }
    for (let num of num2.toString()) {
        if (numCounter2[num]) {
            numCounter2[num]++
        } else {
            numCounter2[num] = 1
        }
    }
    for (let key in numCounter) {
        if (!(key in numCounter2)) {
            return false;
        }
        if (numCounter2[key] !== numCounter[key]) {
            return false;
        }
    }
    return true;
}

// sameFrequency(182, 281);
// sameFrequency(34, 14);
// sameFrequency(22, 222);