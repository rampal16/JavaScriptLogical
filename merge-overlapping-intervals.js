// Merge Overlapping Intervals

function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  // 1. Sort by start time - O(n log n)
  intervals.sort((a, b) => a[0] - b[0]);

  // 2. Initialize with the first interval
  const merged = [intervals[0]];

  // 3. Iterate and compare - O(n)
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    // Check if current interval starts before or at previous interval's end
    if (current[0] <= lastMerged[1]) {
      // Merge by updating the end to the furthest point
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, add as a new entry
      merged.push(current);
    }
  }

  return merged;
}

// Example usage
const input = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(input)); 
// Output: [[1, 6], [8, 10], [15, 18]]
