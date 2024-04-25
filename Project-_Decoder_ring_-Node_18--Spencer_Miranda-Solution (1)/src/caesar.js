// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesar = (function () {
  function caesar(input, shift, encode = true) {
    // Check if shift value is missing or out of range
    if (shift === undefined || shift < -25 || shift > 25 || shift === 0) return false;

    // If decode is true, convert shift to negative
    if (!encode) shift *= -1;

    return input
      .toLowerCase()
      .split('')
      .map(char => {
        if (/[a-z]/.test(char)) {
          // Convert character to alphabet index (0-25)
          let charIndex = char.charCodeAt(0) - 97;
          // Apply shift and ensure it wraps around within the range of the alphabet
          charIndex = (charIndex + shift + 26) % 26;
          // Convert back to character
          return String.fromCharCode(charIndex + 97);
        } else {
          return char;
        }
      })
      .join('');
  }

  return {
    caesar,
  };
})();

module.exports = caesar;
