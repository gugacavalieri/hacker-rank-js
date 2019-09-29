/*
* Complete the 'kthPerson' function below.
*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts following parameters:
*  1. INTEGER k
*  2. INTEGER_ARRAY p
*  3. INTEGER_ARRAY q
*/

const kthPerson = (k, p, q) => {
  const resultArray = []
  let currentKthPerson = 0
  let peopleBoarded = 0

  /* interate on query array */
  for (let i = 0; i < q.length; i++) {
    /* init current kth person for this query */
    currentKthPerson = 0
    peopleBoarded = 0

    /* iterate on person time array */
    for (let j = 0; j < p.length; j++) {
      // console.log(p[j], q[i], currentKthPerson, p)
      /* check if bus is full */
      if (peopleBoarded >= k || k > p.length) {
        break
      }

      /* if person is still waiting, set this person as kth person */
      if (p[j] >= q[i]) {
        peopleBoarded++
        currentKthPerson = j + 1
      }
      // console.log(i, p, peopleStillInLine)
    }

    // console.log(currentKthPerson)

    /* check if we reached a kth person */
    resultArray.push(peopleBoarded >= k ? currentKthPerson : 0)
  }
  return resultArray
}

module.exports = { kthPerson }
