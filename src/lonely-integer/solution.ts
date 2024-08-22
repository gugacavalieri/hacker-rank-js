/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 * Here, we use a Map <string, number> to hold the integer counts to only have to iterate once
 * Time complexity: O(n)
 * Space Complexity: O(n)
 */
const lonelyinteger = (a: number[]): number => {
  const integerCounter:Record<string, number> = {};

  // let's count the integers first
  a.forEach((number) => {
    if (integerCounter[number]) {
      integerCounter[number] += 1;
    } else {
      integerCounter[number] = 1;
    }
  });

  // let's find the lonely integer
  let lonelyInteger:number = -1;
  const indexedKeys:string[] = Object.keys(integerCounter);

  for (let index = 0; index < indexedKeys.length; index += 1) {
    const currentKey:string = indexedKeys[index];

    // if we find the integer with one count, we can break.
    if (integerCounter[currentKey] === 1) {
      lonelyInteger = parseInt(currentKey, 10);
      break;
    }
  }

  return lonelyInteger;
};

module.exports = { lonelyinteger };
