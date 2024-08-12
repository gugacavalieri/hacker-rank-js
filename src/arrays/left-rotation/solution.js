/**
 * This solution uses .splice() method
 *
 * The complexity is O(n) since we go through all elements of the original array
 * to construct the new array :)
 *
 * @param  {Array} array array containing elements
 * @param  {Number} d    rotation factor
 * @return {Array}       Array rotated 'd' positions to the left
 */
const rotLeft = (array, d) => {
  const pivot = d % array.length;

  const firstElements = array.slice(pivot, array.length);
  const lastElements = array.slice(0, pivot);

  return [...firstElements, ...lastElements];
};

/*
  we can implement a future solution using only 'for'
 */

module.exports = { rotLeft };
