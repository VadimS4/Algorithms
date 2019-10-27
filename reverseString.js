//Version 1 of the algorithm using built in function .reverse()

var reverseString = function (string) {
    return string.reverse();
};

//Version 2 of the algorithm, not using a built in function .reverse, but using pointers instead. 

var reverseString = function (string) {
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        let temp = string[left];
        string[left++] = string[right];
        string[right--] = temp;
    }
};

reverseString(["s", "o", "r", "r", "y"]);

