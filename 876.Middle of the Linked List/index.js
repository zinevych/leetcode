/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  let node = head;
  let counter = 1
  while(node.next) {
      node = node.next;
      counter++
  }

  let mid = 1;
  
  if(counter % 2 === 0) {
      mid = counter / 2 + 1;
  } else {
      mid = Math.round(counter/2);
  }
  
  node = head;
  while(mid > 1) {
      node = node.next;
      mid--
  }
  
  return node;
};