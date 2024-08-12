const hourglassSum = (arr) => {
  let maxSum;
  let currentSum;

  /* iterate through our array */
  for (let i = 0; i < arr.length - 2; i += 1) {
    for (let j = 1; j < arr[i].length - 1; j += 1) {
      currentSum = arr[i][j - 1] + arr[i][j] + arr[i][j + 1] // sum first line
      + arr[i + 1][j] // sum second line
      + arr[i + 2][j - 1] + arr[i + 2][j] + arr[i + 2][j + 1]; // sum third line

      /* check if we reached a new max sum */
      if (currentSum > maxSum || maxSum === undefined) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
};

module.exports = { hourglassSum };
