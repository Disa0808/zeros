module.exports = function getZerosCount(number) {
  let n = 1;
  let cntZeros = 0;
  while (number / Math.pow(5, n) > 1) {
    cntZeros += Math.floor(number / Math.pow(5, n));
    n++;
  }

  return cntZeros;
}
