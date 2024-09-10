/**
 * This function will call how many times the biggest number repeats in an array
 * Time Complexity: O(n)
 * Space Complexity: O(n) -> Hashmap
 * @param candles Array of Candles, or Numbers
 * @returns Biggest Number Count
 */
const birthdayCakeCandles = (candles: number[]) : number => {
  let biggestCandle:number = 0;
  const candleCounterHashMap:Record<string, number> = {};

  // for each candle, we keep track of the biggest one
  // and we also count all of them in a hashmap
  candles.forEach((candle) => {
    if (candle > biggestCandle) {
      biggestCandle = candle;
    }
    // add candle to our hash map
    if (candleCounterHashMap[candle]) {
      candleCounterHashMap[candle] += 1;
    } else {
      candleCounterHashMap[candle] = 1;
    }
  });

  return candleCounterHashMap[biggestCandle];
};

export default { birthdayCakeCandles };
