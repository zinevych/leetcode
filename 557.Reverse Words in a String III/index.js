/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  const arr = s.split(' ');
  const res = arr.reduce((acc, item, index) => {
      acc = acc.concat(item.split('').reverse().join(''))
      if(index < arr.length - 1) {
          acc = acc.concat(' ')
      }
      return acc;
  }, '');
  return res;
};  