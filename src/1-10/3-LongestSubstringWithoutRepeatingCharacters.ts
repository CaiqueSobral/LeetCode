function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const nextEqualElement = s
      .split('')
      .findIndex((el, index) => index >= i && el === s[i]);
    console.log(i, nextEqualElement);
  }

  return max;
}
