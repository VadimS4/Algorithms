// Algorithm to check if there are duplicates with a random input.
// Algorithm solved using pointers to make sure that the solution is time and space complexity of O(N)

function areThereDuplicates(...input) {
    // good luck. (supply any arguments you deem necessary.)
    input = input.sort();
    let start = 0;
    let next = 1;

    while (next < input.length) {
        if (input[start] === input[next]) {
            return true;
        }
        next++;
        start++;
    }
    return false;
}

// areThereDuplicates(1, 2, 3);
// areThereDuplicates(1, 2, 2);
// areThereDuplicates('a', 'b', 'c', 'a');