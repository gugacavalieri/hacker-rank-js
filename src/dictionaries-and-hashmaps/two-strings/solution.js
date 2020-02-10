/*
    remember that a substring can be just one character
    so, if both strings share one small character we can return 'YES'
    Then, one good solution is to iterate through the alphabet and see if both strings share any letter
    if so, it is a match :)
*/
const twoStrings = (s1, s2) => {
  const alphabet = 'abcdefghijklmnopqrstuvxwyz'
  for (const character of alphabet) {
    if (s1.indexOf(character) !== -1 && s2.indexOf(character) !== -1) {
      return 'YES'
    }
  }
  return 'NO'
}

module.exports = { twoStrings }
