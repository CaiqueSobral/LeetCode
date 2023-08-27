function myAtoi(s: string): number {
  const ALL_NUMBERS = '0123456789';
  let number = 0;
  let isNegative = false;
  let isLastCharSymbol = false;
  let isLastCharDigit = false;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] !== ' ') {
      if (s[i] === '-' || s[i] === '+') {
        if (isLastCharSymbol || isLastCharDigit) break;

        isNegative = s[i] === '-';
        isLastCharSymbol = true;
      } else if (ALL_NUMBERS.includes(s[i])) {
        isLastCharDigit = true;
        const newNumber = number * 10 + Number(s[i]);
        if (newNumber >= Math.pow(2, 31)) {
          number = isNegative ? Math.pow(2, 31) : Math.pow(2, 31) - 1;
          break;
        }
        number = newNumber;
      } else {
        break;
      }
    } else if (isLastCharDigit || isLastCharSymbol) break;
  }

  return isNegative ? -number : number;
}
