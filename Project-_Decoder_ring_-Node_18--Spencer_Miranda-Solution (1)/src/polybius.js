// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybius = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = {
      a: '11', b: '21', c: '31', d: '41', e: '51',
      f: '12', g: '22', h: '32', i: '42', j: '42',
      k: '52', l: '13', m: '23', n: '33', o: '43',
      p: '53', q: '14', r: '24', s: '34', t: '44',
      u: '54', v: '15', w: '25', x: '35', y: '45', z: '55'
    };

    if (!encode) {
      const swappedPolybiusSquare = {};
      Object.keys(polybiusSquare).forEach(key => {
        if (polybiusSquare[key] === '42') {
          swappedPolybiusSquare['42'] = '(i/j)';
        } else {
          swappedPolybiusSquare[polybiusSquare[key]] = key;
        }
      });

      const inputWithoutSpaces = input.replace(/\s/g, '');
      if (inputWithoutSpaces.length % 2 !== 0) return false;

      let decoded = '';
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === ' ') {
          decoded += ' ';
          i--;
        } else {
          const pair = input.slice(i, i + 2);
          if (swappedPolybiusSquare[pair]) {
            decoded += swappedPolybiusSquare[pair];
          } else {
            return false; // Handle invalid pairs
          }
        }
      }
      return decoded;
    }

    return input
      .toLowerCase()
      .split('')
      .map(char => polybiusSquare[char] || char)
      .join('');
  }

  return {
    polybius,
  };
})();

module.exports = polybius;
