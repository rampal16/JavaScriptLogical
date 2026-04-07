// Spiral Matrix Traversal

function spiralOrder(matrix) {
  if (matrix.length === 0) return [];

  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 1. Traverse Right: Across the top boundary
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++; // Finished the top row

    // 2. Traverse Down: Along the right boundary
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--; // Finished the right column

    // 3. Traverse Left: Across the bottom boundary (only if rows remain)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--; // Finished the bottom row
    }

    // 4. Traverse Up: Along the left boundary (only if columns remain)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++; // Finished the left column
    }
  }

  return result;
}

// Example usage:
const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(spiralOrder(input)); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
