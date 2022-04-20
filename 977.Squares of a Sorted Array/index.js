/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  const res = [];
  
  while(i <= j) {
      if(Math.abs(nums[i]) >= Math.abs(nums[j])) {
          res.push(Math.pow(nums[i], 2));
          i += 1;
      } else {
          console.log('2')
          res.push(Math.pow(nums[j], 2));
          j -= 1;
      }
  }
  
  return res.reverse()
};