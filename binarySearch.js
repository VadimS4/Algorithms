//LeetCode binary search algorithm

var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return nums.indexOf(nums[i])
        }
    }
    return -1;
};

search([1, 2, 3, 4, 5], 5)