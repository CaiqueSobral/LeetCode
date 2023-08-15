function longestPalindrome(s: string): string {
  if (!s) return '';
  if (isPalindrome(s)) return s;

  let temp = s[0];
  const charsMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (charsMap.has(s[i])) {
      const string = s.slice(charsMap.get(s[i]), i + 1);
      if (isPalindrome(string)) {
        temp = string.length > temp.length ? string : temp;
      }
    } else {
      charsMap.set(s[i], i);
    }
  }

  return temp;
}

function isPalindrome(string: string): boolean {
  const reversedString = string.split('').reverse().join('');

  return string === reversedString;
}
