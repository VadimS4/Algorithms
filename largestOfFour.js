function largestOfFour(array) {

    largestArray = [];

    for (let i = 0; i < array.length; i++) {
        let largestNumber = 0;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > largestNumber) {
                largestNumber = array[i][j]
            }
        }
        largestArray.push(largestNumber);
    }
    return largestArray;
}