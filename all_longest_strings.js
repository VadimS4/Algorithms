function allLongestStrings(arr) {
    let newArr = [];
    let longest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= longest) {
            longest = arr[i].length;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length == longest) {
            newArr.push(arr[j]);
        }
    }
    return newArr;
}