import lengthOfLongestSubstring from '../../1-10/3-LongestSubstringWithoutRepeatingCharacters';

describe('3 - Given a string, find the length of the longest substring without repeating characters.', () => {
  test('Initial string: abcabcbb --- Expect: 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('Initial string: bbbbb --- Expect: 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('Initial string: pwwkew --- Expect: 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
