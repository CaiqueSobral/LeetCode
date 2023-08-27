/*
 * TODO
 */

function isMatch(s: string, p: string): boolean {
  const arr = [...s, ...p];
  if (!arr.includes('.') && !arr.includes('*')) return s === p;

  let isEqual = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === p[i]) {
      isEqual = true;
    } else if (p[i] === '.') {
      isEqual = true;
    } else if (isEqual && p[i] === '*') {
      return true;
    } else {
      return false;
    }
  }

  return isEqual;
}

const arr2 = [
  ['.aaa', 'aaa'],
  ['aa', 'a'],
  ['aa', 'a*'],
  ['ab', '.*'],
];
arr2.forEach((e) => {
  console.log(isMatch(e[0], e[1]));
});
