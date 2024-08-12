const compareTriplets = (a, b) => {
  let alicePoints = 0;
  let bobPoints = 0;

  a.forEach((element, index) => {
    if (a[index] > b[index]) alicePoints += 1;
    if (b[index] > a[index]) bobPoints += 1;
  });

  return [alicePoints, bobPoints];
};

module.exports = { compareTriplets };
