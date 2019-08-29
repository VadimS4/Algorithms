var lengthOfLastWord = function (s) {
    array = s.split(' ');
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '') {
            array = array.filter(emptySpace => emptySpace)
        }
    }
    if (array.length > 0) {
        return array[array.length - 1].length;
    } else {
        return 0;
    }
};