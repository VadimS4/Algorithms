// Function to find max sum of a subarray with the length of the number passed into the function.
// Algorithm problem solved using the Sliding window approach.

function maxSubarraySum(arr, int) {

    if (arr.length < int) {
        return null;
    }

    let total = 0;

    for (let i = 0; i < int; i++) {
        total += arr[i]
    }

    let currentTotal = total;

    for (let i = int; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - int];
        total = Math.max(total, currentTotal);
    }
    return total;
}

// maxSubarraySum([100,200,300,400], 2)
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)
// maxSubarraySum([-3,4,0,-2,6,-1], 2)
// maxSubarraySum([2,3], 3)