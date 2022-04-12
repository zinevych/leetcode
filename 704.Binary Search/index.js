/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  const binarySearch = (arr, l, r, x) => {
      if (r >= l) {
          const mid = l + Math.floor((r - l) / 2);
      
          if(arr[mid] === x)
              return mid;

          if(arr[mid] > x) {
              return binarySearch(arr, l, mid - 1, x);
          } else {
              return binarySearch(arr, mid + 1, r, x)
          }    
      } 
      
      return -1
  } 
  
  return binarySearch(nums, 0, nums.length - 1, target);
};