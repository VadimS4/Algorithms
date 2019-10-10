//Algorithm given with an array and a target number. Given the target number, find its index, and if not in the array,
//find the index where it is supposed to go.

// Input: [1, 3, 5, 6], 5
// Output: 2

// Input: [1, 3, 5, 6], 7
// Output: 4

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target > nums[nums.length - 1]) {
            return nums.indexOf(nums[nums.length - 1]) + 1;
        } else if (target < nums[i]) {
            return nums.indexOf(nums[i]);
        } else if (target === nums[i]) {
            return nums.indexOf(target);
        }
    }
}