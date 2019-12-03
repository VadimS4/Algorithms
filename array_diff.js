// Code Wars algorithm to implement a difference function. Where you compare two arrays and delete similar items to make sure both
// arrays do not contain the same items.array_diff([1,2],[1]) == [2]

// array_diff([1,2],[1]) == [2]

function array_diff(a, b) {

    // loop through the first array.
    for (let i = 0; i < a.length; i++) {

        // nested loop through the second array
        for (let j = 0; j < b.length; j++) {

            //filter the a array if its items are the same as the items in the b array
            a = a.filter(item => item !== b[j])
        }
    }

    //return the filtered array.
    return a;
}