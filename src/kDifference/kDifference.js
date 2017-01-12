/**
 * Counts a number of unique pairs of items in array for which the difference is the specific number.
 * n logn complexity because of using sorting
 * @param {number[]} a - the array of items to count pairs
 * @param {number} k — the desired difference between numbers
 */

export default function kDifference(a, k) {
  if (!Number.isInteger(k) || k <= 0) {
    throw new Error('k value provided is not a positive integer');
  }

  let count = 0;

  // prepare sorted array with unique numbers for counting
  const uniqs = new Set();
  for (var i = 0; i < a.length; i++) {
    uniqs.add(a[i]);
  }
  const uniqueA = Array.from(uniqs);
  uniqueA.sort((a, b) => a - b);

  // actually count
  for (var i = 0; i < uniqueA.length; i++) {
    for (var j = i + 1; j < uniqueA.length; j++) {
      if (uniqueA[j] - uniqueA[i] > k) break;
      if (uniqueA[j] === uniqueA[i] + k) {
        count += 1;
      }
    }
  }
  return count;
}
