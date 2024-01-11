import threeSum from '../../11-20/15-3Sum';

describe('15 - Given an integer array, return all the triplets such that i != j, i != k, and j != k, which adds up to 0.', () => {
  test('Initial array: [-1,0,1,2,-1,-4] --- Expect: [[-1,0,1],[-1,-1,2]]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, 0, 1],
      [-1, -1, 2],
    ]);
  });

  test('Initial array: [0,1,1] --- Expect: []', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  test('Initial array: [0,0,0] --- Expect: [0,0,0]', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  test('Initial array: [3,0,-2,-1,1,2] --- Expect: [[-2,-1,3],[-2,0,2],[-1,0,1]]', () => {
    expect(threeSum([3, 0, -2, -1, 1, 2])).toEqual([
      [-1, 0, 1],
      [-2, 0, 2],
      [-2, -1, 3],
    ]);
  });
});
