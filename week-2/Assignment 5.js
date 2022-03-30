// Algorithm Practice(Two Sum)

// Time complexity: O(N^2)/Space complexity: O(1)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

// Time complexity: O(N)/Space complexity: O(N)
function twoSum(nums, target) {
    let lookup = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in lookup) {
            return [lookup[nums[i]], i];
        }
        lookup[target - nums[i]] = i;
    }
}