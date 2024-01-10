import findMedianSortedArrays from '../../1-10/4-MedianOfTwoSortedArrays';

describe('4 - Given two sorted arrays, return the median of the two sorted arrays.', () => {
  test('Initial array: [1,3], [2] --- Expect: 2', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test('Initial array: [1,2], [3,4] --- Expect: 2.5', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });
});
