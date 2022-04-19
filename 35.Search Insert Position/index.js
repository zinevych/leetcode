/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
  const binarySearch = (l, r) => {
      if(r > l) {
          const mid = l + Math.floor((r - l)/2)
          
          if(nums[mid] === target) {
              return mid;
          } else if(nums[mid] > target) {
              return binarySearch(l, mid - 1)
          } else {
              return binarySearch(mid + 1, r)
          }
          
      } else {
          return nums[l] >= target ? l : l+1
      }
  }
  
  return binarySearch(0, nums.length - 1);
};