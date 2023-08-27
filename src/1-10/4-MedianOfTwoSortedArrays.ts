/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const numbers = [...nums1, ...nums2].sort((a, b) => a - b);
  const medianLocation = (numbers.length - 1) / 2;

  return (
    (numbers[Math.floor(medianLocation)] + numbers[Math.ceil(medianLocation)]) /
    2
  );
}
