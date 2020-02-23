// Creating a solution for the valid Anagram algorithm using Frequency Counters.
// Frequency counters allow for a quicker solutions without having nested loops.

function validAnagram(str1, str2) {

    //initialize two objects
    let firstObject = {};
    let secondObject = {};

    //loop through the first string.
    for (let val of str1) {

        //initialize a count for every key that gets inserted into the object. If the key exists already, add 1 to the value.
        firstObject[val] = (firstObject[val] || 0) + 1;
    }

    //loop through second string.
    for (let val of str2) {

        //initialize a count for every key that gets inserted into the object. If the key exists already, add 1 to the value.
        secondObject[val] = (secondObject[val] || 0) + 1;
    }

    //compare the two objects to make sure they match.
    for (let key in firstObject) {

        // If both objects don't have matching keys, return false.
        if (!(key in secondObject)) {
            return false
        }

        //if both objects don't have matching values for the keys, return false.
        if (secondObject[key] !== firstObject[key]) {
            return false
        }
    }

    //return true if both objects return the same.
    return true
}