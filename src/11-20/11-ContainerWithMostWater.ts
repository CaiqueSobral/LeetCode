// for (let i = 0; i < height.length; i++) {
//   for (let j = i + 1; j < height.length; j++) {
//     if (height[i] < height[j]) {
//       temp = height[i] * (j - i);
//     } else {
//       temp = height[j] * (j - i);
//     }
//     max = max < temp ? temp : max;
//   }
// }
// return max;

function maxArea(height: number[]): number {
  let max = 0,
    temp = 0,
    right = height.length - 1,
    left = 0;

  while (right > left) {
    if (height[left] < height[right]) {
      temp = height[left] * (right - left);
      left++;
    } else {
      temp = height[right] * (right - left);
      right--;
    }
    max = max < temp ? temp : max;
  }

  return max;
}
