/*
* Complete the handshake function below.
*
* This problem can be solved using a Arithmetic Progression
* Imagine that we have 'n' persons in room
* The 1st person can shake hands with (n-1) persons
* The 2nd person can shake hands with (n-2) persons, since it has already shaken hands w/ the 1st one
* The 3rd person can shake hands with (n-3) persons, since it has already shaken hands w/ the 1st and 2nd one
* This goes on until the last person who will shake hands with nobody since every other person has already
* shaken hands with it
*
* In this case we have an A.P with common difference = -1
* We can then sum the numbers in this A.P till the last element which will be zero
*
* Example for 4 persons:
* Sum of the A.P: 3 + 2 + 1 + 0 = (3) + (3) = 6
*
* Example for 5 persons:
* Sum of the A.P: 4 + 3 + 2 + 1 + 0 = (4) + (4) + (2) = 10
*
* Time complexity: O(1)  YEAYYYY :)
*/
const handshake = (n) => {
  return (n / 2) * (n - 1)
}

module.exports = { handshake }
