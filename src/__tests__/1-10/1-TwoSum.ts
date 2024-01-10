import twoSum from '../../1-10/1-TwoSum';

describe('1 - Two Sum, return indices of the two numbers that add up to target.', () => {
  test('Initial array: [2, 7, 11, 15], Target: 9 --- Expect: [0,1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('Initial array: [3, 2, 4], Target: 6 --- Expect: [1,2]', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('Initial array: [3, 3], Target: 6 --- Expect: [0,1]', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
