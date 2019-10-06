/*
* Complete the 'getTimes' function below.
*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts following parameters:
*  1. INTEGER_ARRAY time
*  2. INTEGER_ARRAY direction
*/
const getTimes = (time, direction) => {
  const resultArray = []
  let currentTick = 0
  let currentDirection = 1

  /* we use a raw 'for' in here because it is faster than .forEach() */
  for (let i = 0; i < time.length; i++) {
    /* check if person was already inserted */
    if (resultArray[i] !== undefined) continue

    /* update current time and direction */
    if (currentTick < time[i]) {
      currentTick = time[i]
      currentDirection = 1
    }

    /* current person is in right direction */
    if (direction[i] === currentDirection) {
      resultArray[i] = currentTick
      currentDirection = direction[i]
      currentTick++
      continue
    }

    /* else, we need to find who should go ahead of this person */
    let j = i + 1
    while (j < time.length && time[j] <= currentTick) {
      /* if person 'j' is in same direction, it can pass !! :) */
      if (direction[j] === currentDirection) {
        resultArray[j] = currentTick
        currentDirection = direction[j]
        currentTick++
      }
      j++
    }

    /* calculate current position for person 'i' */
    resultArray[i] = currentTick
    currentDirection = direction[i]
    currentTick++
  }

  return resultArray
}

module.exports = { getTimes }
