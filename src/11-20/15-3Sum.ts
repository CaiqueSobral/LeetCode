function threeSum(nums: number[]): number[][] {
  const ans: Array<Array<number>> = [];
  let size = 0;

  if (nums.length < 3) return ans;

  for (let i = 0; i < nums.length; i++) {
    if (size != ans.length) {
      size = ans.length;
      i--;
    }
    let first: null | number = nums[i];
    let second: null | number = null;
    let third: null | number = null;

    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      if (second === null) {
        second = nums[j];
      } else {
        third = nums[j];

        if (first + second + third === 0) {
          const arr = new Array(first, second, third).sort((a, b) => a - b);

          !Boolean(ans.filter((ans) => ans.toString() === arr.toString())[0])
            ? ans.push(arr)
            : null;
        }
      }
    }
  }

  return ans;
}

const tests = [
  [0, 0, 0],
  [3, 0, -2, -1, 1, 2],
]; //, [-1, 0, 1, 2, -1, -4], [0, 0, 0]];
tests.forEach((e) => {
  console.log(threeSum(e));
});
