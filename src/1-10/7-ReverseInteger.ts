function reverse(x: number): number {
  const isNegative = x < 0;
  const positiveNumber = isNegative ? -x : x;

  const reversedNumber = Number(
    String(positiveNumber).split('').reverse().join('')
  );

  if (reversedNumber >= Math.pow(2, 31) - 1) return 0;

  return isNegative ? -reversedNumber : reversedNumber;
}
