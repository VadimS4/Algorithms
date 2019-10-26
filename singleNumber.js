function singleNumber(nums) {
    nums.sort();
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i - 1, 2);
            i--;
        }
    }
    return nums;
};

singleNumber([1, 2, 2, 3, 3]);