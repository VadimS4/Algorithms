//Persistent Bugger algorithm from CodeWars

//Function declaration, receive a number as an input.
function persistence(num) {
    //change the number into a string and split the number into individual numbers.
    var numArray = num.toString().split('');

    //Initialize a count variable to count its multiplicative persistence.
    let count = 0;

    //Initialize a placeholder
    let placeholder;

    //While loop to make function run only when the split number has more than 1 element.
    while (numArray.length > 1) {

        //Set the placeholder variable equal a reduce function which (a) is a sum and gets multiplied by the current element in the loop (b)
        placeholder = numArray.reduce(function (a, b) {
            return a * b;
        })

        //increment the count variable
        count++;

        //split the new number and reset the function.
        numArray = placeholder.toString().split('');
    }

    //If the new number is no longer greater than 1, then that means we reached the end.
    //Return the count.
    return count;
}

persistence(39)
persistence(4)
persistence(25)
persistence(999)