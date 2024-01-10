function intToRoman(num: number): string {
  const map = new Map([
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ]);

  let numArr = num.toString().split('');
  let finalString: String[] = [];

  let multiplier = 1;
  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i] === '0') {
      multiplier *= 10;
      continue;
    }

    let helperNum = Number(numArr[i]) * multiplier;

    if (map.has(helperNum)) {
      finalString.unshift(String(map.get(helperNum)));
    } else {
      while (helperNum != multiplier) {
        finalString.unshift(String(map.get(multiplier)));
        helperNum -= multiplier;
        if (map.has(helperNum)) {
          finalString.unshift(String(map.get(helperNum)));
          helperNum = multiplier;
        }
      }
    }

    multiplier *= 10;
  }

  return finalString.join('');
}

const arr = [1, 3, 10, 20, 58, 300, 1994];
arr.forEach((e) => console.log(intToRoman(e)));
