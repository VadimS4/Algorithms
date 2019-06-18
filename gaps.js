function gaps(array, N) {
    let output = []

    for (let i = 0; i <= N; i++) {
        let foundMatch = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] == i) {
                foundMatch = true;
            }
        }
        if (!foundMatch) {
            output.push(i);
        }
    }
    return output
}