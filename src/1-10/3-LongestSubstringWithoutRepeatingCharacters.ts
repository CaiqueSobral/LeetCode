export default function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let max = 0;
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    const index = temp.indexOf(s[i]);

    if (index === -1) {
      temp.push(s[i]);
      max = temp.length > max ? temp.length : max;
    } else {
      temp.splice(0, index + 1);
      temp.push(s[i]);
    }
  }

  return max;
}
