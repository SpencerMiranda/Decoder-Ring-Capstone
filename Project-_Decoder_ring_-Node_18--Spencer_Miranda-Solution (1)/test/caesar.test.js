const { caesar } = require('../src/caesar');
const { expect } = require('chai');

describe('caesar', () => {
  it('should correctly encode a message', () => {
    expect(caesar('thinkful', 3)).to.equal('wklqnixo');
  });

  it('should correctly decode a message', () => {
    expect(caesar('wklqnixo', 3, false)).to.equal('thinkful');
  });

  it('should return false if shift value goes beyond the alphabet range', () => {
    expect(caesar('thinkful', 99)).to.be.false;
    expect(caesar('thinkful', -26)).to.be.false;
  });

  it('should maintain spaces and other non-alphabetic symbols', () => {
    expect(caesar('This is a secret message!', 8)).to.equal('bpqa qa i amkzmb umaaiom!');
  });

  it('should return false if shift value is missing, zero, or out of range', () => {
    expect(caesar('thinkful')).to.be.false;
    expect(caesar('thinkful', 0)).to.be.false;
    expect(caesar('thinkful', 30)).to.be.false;
    expect(caesar('thinkful', -30)).to.be.false;
  });
});
