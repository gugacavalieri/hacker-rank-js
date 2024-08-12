/* we use ceiling function to return the next smallest integer */
const lowestTriangle = (base, area) => Math.ceil((2 * area) / base);

module.exports = { lowestTriangle };
