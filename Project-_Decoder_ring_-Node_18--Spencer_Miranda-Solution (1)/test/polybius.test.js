const { polybius } = require('../src/polybius');
const { expect } = require('chai');

describe('polybius', () => {
  it('should correctly encode a message', () => {
    expect(polybius('thinkful')).to.equal('4432423352125413');
  });

  it('should correctly decode a message', () => {
    expect(polybius('3251131343 2543241341', false)).to.equal('hello world');
  });

  it('should handle the I/J combination', () => {
    expect(polybius('4432423352125413', false)).to.equal('th(i/j)nkful');
  });

  it('should return false if decoding with an odd number of characters', () => {
    expect(polybius('443242335212541', false)).to.be.false;
  });
});
