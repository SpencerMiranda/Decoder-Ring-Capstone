// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitution = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) return false;

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const normalizedInput = input.toLowerCase();

    const encodeMap = Object.fromEntries([...standardAlphabet].map((char, i) => [char, alphabet[i]]));
    const decodeMap = Object.fromEntries([...alphabet].map((char, i) => [char, standardAlphabet[i]]));

    const map = encode ? encodeMap : decodeMap;

    return normalizedInput
      .split('')
      .map(char => map[char] || char)
      .join('');
  }

  return {
    substitution,
  };
})();

module.exports = substitution;
