const lowestTriangle = (base, area) => {
  /* we use ceiling function to return the next smallest integer */
  return Math.ceil(2 * area / base)
}

module.exports = { lowestTriangle }
