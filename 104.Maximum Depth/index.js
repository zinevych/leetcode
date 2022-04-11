/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  let maxDepth = 0;
  function traverse(node, depth) {
      
      if(!node) {
          return 0;
      }

      depth++
      maxDepth = maxDepth < depth ? depth : maxDepth;
      if(node.left) {
          leftDepth = traverse(node.left, depth);
      }
      
      if(node.right) {
          rightDepth = traverse(node.right, depth);
      }
      
  }
  
  traverse(root, 0);
  return maxDepth;
};