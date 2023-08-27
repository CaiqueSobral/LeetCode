function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const matrix = new Array(numRows).fill('');

  let currentRow = -1;
  let ascending = true;

  for (let i = 0; i < s.length; i++) {
    currentRow += ascending ? 1 : -1;
    matrix[currentRow] += s[i];

    if (currentRow === numRows - 1) {
      ascending = false;
    }

    if (currentRow === 0) {
      ascending = true;
    }
  }

  return matrix.join('');
}
