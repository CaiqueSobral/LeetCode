export default function threeSum(nums: number[]): number[][] {
  const answer: Array<Array<number>> = [];
  const sortedArray = nums.sort((a, b) => a - b);

  if (sortedArray.length < 3 || sortedArray[0] > 0) return answer;

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] > 0) break;
    let low = i === 0 ? 1 : 0;
    let high = sortedArray.length - 1;

    while (low < high) {
      if (i === low) low++;
      if (i === high) high--;

      if (low >= high) break;

      const sum = sortedArray[i] + sortedArray[low] + sortedArray[high];

      if (sum === 0) {
        const arr = [sortedArray[i], sortedArray[low], sortedArray[high]].sort(
          (a, b) => a - b
        );

        !Boolean(answer.filter((ans) => ans.toString() === arr.toString())[0])
          ? answer.unshift(arr)
          : null;

        high--;
        low++;
      } else if (sum > 0) {
        high--;
      } else {
        low++;
      }
    }
  }

  return answer;
}

const tests = [[-1, 0, 1, 0]];
tests.forEach((e) => {
  console.log(threeSum(e));
});

// export default function threeSum(nums: number[]): number[][] {
//   const ans: Array<Array<number>> = [];
//   let size = 0;

//   if (nums.length < 3) return ans;

//   let i: number;
//   for (i = 0; i < nums.length; i++) {
//     if (size != ans.length) {
//       size = ans.length;
//       i--;
//     }
//     let first: null | number = nums[i];
//     let second: null | number = null;
//     let third: null | number = null;

//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;

//       second = nums[j];
//       const toZero = -(first + second);

//       for (
//         let indexToZero = nums.indexOf(toZero);
//         indexToZero < nums.length;
//         indexToZero = nums.indexOf(toZero, indexToZero + 1)
//       ) {
//         if (indexToZero === -1 || indexToZero === j || indexToZero === i) break;

//         third = nums[indexToZero];

//         if (first + second + third === 0) {
//           const arr = new Array(first, second, third).sort((a, b) => a - b);

//           !Boolean(ans.filter((ans) => ans.toString() === arr.toString())[0])
//             ? ans.unshift(arr)
//             : null;
//         }
//       }
//     }
//   }

//   return ans;
// }
