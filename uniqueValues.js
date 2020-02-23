// Algorithm solved using pointers to check for amount of unique values given in a sorted array.

function countUniqueValues(arr) {
    // add whatever parameters you deem necessary - good luck!

    // check to see if the length of the array is zero, if so, return zero.
    if (arr.length === 0) {
        return 0;
    }

    // create a pointer variable to point to the starting index.
    let pointer1 = 0;

    // loop through the array, using another variable as a scouting pointer to look ahead of the first pointer.
    for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {

        // if the two values are not equal, move the first pointer and replace the value with the second pointer since it is larger.
        if (arr[pointer1] !== arr[pointer2]) {
            pointer1++;
            arr[pointer1] = arr[pointer2];
        }
    }

    // return the count of unique values.
    return pointer1 + 1;
}