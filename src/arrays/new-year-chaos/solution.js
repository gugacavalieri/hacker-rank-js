/**
 * main function
 * receives an array 'q' and calculates the number of bribes made in the queue
 * time complexity is O(n) for all inputs
 * for each element in the array we check if there are any of the smallest elements
 *   behind me
 * this only works because the array always starts sorted and 3 bribes is an
 *   invalid state
 * @param  {Array} q New Year's chaotic array
 * @return {Number}  Number of Bribes
 */
const minimumBribes = (q) => {
  let numberBribes = 0;
  const minimums = {
    first: Number.MAX_SAFE_INTEGER,
    second: Number.MAX_SAFE_INTEGER,
  };

  /* start from the end and check if there are any of the smallest elements
    behind me */
  for (let i = q.length - 1; i >= 0; i -= 1) {
    /* invalid state */
    if ((q[i] - i) > 3) {
      return 'Too chaotic';
    }

    if (q[i] > minimums.second) {
      /* i am greater than two people behind me */
      numberBribes += 2;
    } else if (q[i] > minimums.first) {
      /* i am greater than one person behind me */
      numberBribes += 1;
    }

    /* adjust minimum values */
    if (q[i] < minimums.first) {
      minimums.second = minimums.first;
      minimums.first = q[i];
    } else if (q[i] < minimums.second) {
      minimums.second = q[i];
    }
  }
  return numberBribes;
};

module.exports = { minimumBribes };
