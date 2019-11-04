// CodeWars divisors algorithm

//Function declaration, with an input of a number.
function divisors(integer) {

    // variable divisor is all the numbers that will be used to divide the input.
    let divisor = integer - 1;

    // declare empty array to store all divisors.
    let array = [];

    //while loop to make sure we are only checking the correct divisors.
    while (divisor > 1) {

        //if the division does not produce a remainder and is evenly divided, push to the beginning of our array.
        if (integer % divisor === 0) {
            array.unshift(divisor)
        }

        // subtract 1, and divide by the next lowest number until we reach the end of the conditional for the while loop.
        divisor--;
    }

    // If empty array, we have a prime number, if not, return the array of divisors.
    if (array.length < 1) {
        return `${integer} is prime`;
    } else {
        return array;
    }
};

divisors(15);
divisors(12);
divisors(13);