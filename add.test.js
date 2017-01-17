var add = require('./add.js');
var expect = require('chai').expect;
describe('insertInterval函數的測試', function() {
  it('case 1', function() {
    expect(add(1,1)).to.be.equal(2);
  });
  it('case 2', function() {
    expect(add(0,2)).to.be.equal(2);
  });
  it('case 3', function() {
    expect(add(99,99)).to.be.equal(198);
  });
  it('case 4', function() {
    expect(add(49,51)).to.be.equal(100);
  });
});
