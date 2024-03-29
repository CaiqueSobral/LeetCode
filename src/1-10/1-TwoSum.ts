/**
**Given an array of integers nums and an integer target, return indices of the two numbers 
**such that they add up to target.

**You may assume that each input would have exactly one solution, 
**and you may not use the same element twice.

**You can return the answer in any order.
*/

export default function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const howMuchToTarget = target - nums[i];

    if (map.has(howMuchToTarget)) {
      return [map.get(howMuchToTarget), i];
    }

    map.set(nums[i], i);
  }

  return [];
}
