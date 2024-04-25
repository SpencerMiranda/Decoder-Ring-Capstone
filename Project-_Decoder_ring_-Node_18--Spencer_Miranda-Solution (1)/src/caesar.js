// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesar = (function () {
  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift < -25 || shift > 25 || shift === 0) return false;

    if (!encode) shift *= -1;

    return input
      .toLowerCase()
      .split('')
      .map(char => {
        if (/[a-z]/.test(char)) {
          let charIndex = char.charCodeAt(0) - 97;
          charIndex = (charIndex + shift + 26) % 26;
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
