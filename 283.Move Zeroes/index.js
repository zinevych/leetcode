/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let realIndex = 0;
  for(let i = 0; i<nums.length; i++) {
      if(nums[i] != 0) {
          nums[realIndex] = nums[i];
          realIndex++;
      }
  }
  
  for(let i = realIndex; i<nums.length; i++) {
      nums[i] = 0;
  }
};