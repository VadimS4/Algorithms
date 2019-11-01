//CodeWars toCamelCase algorithm


//Function declaration, we receieve an input of the string.
function toCamelCase(str) {

    //If the string is empty, return it.
    if (str === "") {
        return str;
    }

    //Split the string into each word.
    let newString = str.split(/[-_]/)

    //Save the first word.
    let firstWord = newString[0]
    
    //Declare empty array where we will throw all of our elements in.
    let returnArray = [];


    //For loop to capitalize the first letter of every word after the first word. So second word and so on...
    for (let i = 1; i < newString.length; i++) {
        //Push all the upercased words into our empty string.
        returnArray.push(newString[i].charAt(0).toUpperCase() + newString[i].substring(1));
    }

    //Add our first word, which we left the same, and add it to the beginning of our string.
    returnArray.unshift(`${firstWord}`);

    //Concatenate our string together and return it
    return returnArray.join("");
}

toCamelCase('');
toCamelCase("the_stealth_warrior");
toCamelCase("The-Stealth-Warrior");
toCamelCase("A-B-C");