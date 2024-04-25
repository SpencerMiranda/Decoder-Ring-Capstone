const { substitution } = require('../src/substitution');
const { expect } = require('chai');

describe('substitution', () => {
  it('should correctly encode a message', () => {
    expect(substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('jrufscpw');
  });

  it('should correctly decode a message', () => {
    expect(substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false)).to.equal('thinkful');
  });

  it('should maintain spaces and other non-alphabetic symbols', () => {
    expect(substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('elp xhm xf mbymwwmfj dne');
  });

  it('should return false if alphabet is not 26 characters long or contains non-unique characters', () => {
    expect(substitution('thinkful', 'short')).to.be.false;
    expect(substitution('thinkful', 'abcabcabcabcabcabcabcabcyz')).to.be.false;
  });
});
