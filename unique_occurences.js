var uniqueOccurrences = function (arr) {

    let object = {};

    for (let i = 0; i < arr.length; i++) {
        object[arr[i]] = (object[arr[i]] || 0) + 1;
    }

    let uniqueArray = [];

    for (let key of Object.keys(object)) {

        if (!uniqueArray.includes(object[key])) {
            uniqueArray.push(object[key])
        } else {
            return false;
        }
    }

    return true;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]);