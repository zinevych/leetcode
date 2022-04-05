/**
 * @param {number[][]} grid
 * @return {number}
 */
 var getMaximumGold = function(grid) {
        
  let counter = 0;
  
  for(let i=0; i<grid.length; i++) {
      for(let j=0; j<grid[i].length; j++) {
          if(grid[i][j] != 0) {
              counter = Math.max(counter, maxGold(grid, i, j))
          }
      }
  }
  return counter;
}; 

const maxGold = (grid, i, j, count=0) => {
  if(i>=grid.length || j>=grid[0].length || i<0 || j<0) {
      return 0;
  }
  
  if(grid[i][j] !== 0) {
      count += grid[i][j];
      let temp = grid[i][j];
      grid[i][j] = 0;
  
      const left = maxGold(grid, i, j-1, count);
      const right = maxGold(grid, i, j+1, count);
      const bottom = maxGold(grid, i+1, j, count);
      const top = maxGold(grid, i-1, j, count);
      
      grid[i][j] = temp;
  
      return Math.max(left, right, bottom, top);
  } else {
      return count
  } 
}