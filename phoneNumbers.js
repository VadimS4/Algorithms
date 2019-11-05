// CodeWars algorithm Phone Numbers

//This algorithm takes in an input of 9 numbers that need to be formatted into the correct string.

// Function declaration with an input of an array of 9 numbers
function createPhoneNumber(numbers) {

    // Since we have a fixed input of 9 numbers. I hard coded the format and return as a formatted string.
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}