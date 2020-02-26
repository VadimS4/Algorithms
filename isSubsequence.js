// Function which takes in two strings and checks whether the characters in the first string form a subsequence
// of the characters in the second string.

// Algorithm solved using a multiple pointer method.

function isSubsequence(str1, str2) {

    let str1Pointer = 0;
    let str2Pointer = 0;

    if (!str1) {
        return true;
    }

    while (str2Pointer < str2.length) {
        if (str2[str2Pointer] === str1[str1Pointer]) {
            str1Pointer++;
        }
        if (str1Pointer === str1.length) {
            return true;
        }
        str2Pointer++;
    }
    return false;
}

// isSubsequence('hello', 'hello world')
// isSubsequence('sing', 'sting')
// isSubsequence('abc', 'abracadabra')
// isSubsequence('abc', 'acb')