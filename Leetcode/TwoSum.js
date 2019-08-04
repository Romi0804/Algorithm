// Solution 1 - 49.95%

const twoSum = function(nums, targer) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

// Soution 2  - 97.92% (hashtable)
const twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != null) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
};
