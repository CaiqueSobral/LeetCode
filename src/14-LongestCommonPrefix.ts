function longestCommonPrefix(strs: string[]): string {
  let answer = '';

  const sortedArr = strs.sort();
  const firstWord = sortedArr[0];
  const lastWord = sortedArr[sortedArr.length - 1];

  for (let i = 0; i < Math.min(firstWord.length, lastWord.length); i++) {
    if (firstWord[i] != lastWord[i]) return answer;
    answer += firstWord[i];
  }
  return answer;
}

const input = ['dog', 'doggo', 'dogeCoin'];

console.log(longestCommonPrefix(input));
