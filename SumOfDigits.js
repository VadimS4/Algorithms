// CodeWars Sum of Digits algorithm

// Function declaration, with an input of a number
function digital_root(n) {

    // turn the number into a string and split it into individual numbers
    let splitNumber = n.toString().split('');

    // declare a finalAmount variable
    let finalAmount = 0;


    // while loop to make sure we only loop if the number is larger than 1 character.
    while (splitNumber.length > 1) {

        // reduce the letters by adding them to each other.
        let amount = splitNumber.reduce((total, currentValue) => {

            // parse the strings into numbers or else it will concatenate instead of add. 
            return parseInt(total) + parseInt(currentValue);
        })

        // change our original array to the new total we recieved so that we enter the while loop again.
        splitNumber = amount.toString().split('')

        // set the final amount variable to the amount that was last calcluated by the reduce function.
        finalAmount = amount;
    }

    // if the array entered into the whie loop is smaller than 2 characters, we exit the loop and return the last recorded total.
    return finalAmount;
}

// digital_root(16);
// digital_root(456);
// digital_root(132189);