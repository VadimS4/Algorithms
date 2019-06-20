function properNoun(string) {
    let firstLetter = string[0].toUpperCase();
    let restOfWord = string.slice(1).toLowerCase();

    return firstLetter.concat(restOfWord)
}