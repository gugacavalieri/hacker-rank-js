/*
 * Complete the findPoint function below.
 */
const findPoint = (px, py, qx, qy) => {
  const xDiff = qx - px
  const yDiff = qy - py

  return [qx + xDiff, qy + yDiff]
}

module.exports = { findPoint }
