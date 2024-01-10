function isValid(s: string): boolean {
  const reversedStr = Array.from(s).reverse().join('');

  if (s === reversedStr) {
    return true;
  }

  console.log(s);
  console.log(reversedStr);

  return false;
}

const arr = ['()[]{}', '(]', '(()()[]{()})'];
arr.forEach((e) => console.log(isValid(e)));
