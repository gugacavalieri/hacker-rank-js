/**
 * we are going to use functional programming to solve this
 * The reduce() method reduces the array to a single value.
 * The return value of the function is stored in an accumulator (result/total).
 * @param {*} ar Array containing numbers
 */
const simpleArraySum = (ar) => ar.reduce((sum, number) => Number(sum) + Number(number), 0);

module.exports = { simpleArraySum };
