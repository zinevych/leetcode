/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  
  
  return function(n) {
      let l = 1;
      let r = n;
      
      let recentBadVersion;
      let current;
      
      while(r >= l) {
          current = l + Math.floor((r - l) / 2);

          if(isBadVersion(current)) {
              recentBadVersion = current;
              r = current - 1;
          } else {
              l = current + 1;
          }
      }
      
      return recentBadVersion
  };
};