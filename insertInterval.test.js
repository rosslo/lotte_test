var insertInterval = require('./insertInterval.js');
var expect = require('chai').expect;
describe('insertInterval函數的測試', function() {
  it('case 1', function() {
    expect(insertInterval([[1,3],[6,9]], [2,5])).to.be.eql([[1,5],[6,9]]);
  });
  it('case 2', function() {
    expect(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,9])).to.be.eql([[1,2],[3,10],[12,16]]);
  });
  it('case 3', function() {
    expect(insertInterval([[1,5]], [2,7])).to.be.eql([[1,7]]);
  });
  it('case 4', function() {
    expect(insertInterval([[1,2],[5,9]], [2,5])).to.be.eql([[1,9]]);
  });
  it('case 5', function() {
    expect(insertInterval([[1,2],[5,9]], [3,4])).to.be.eql([[1,2], [3,4], [5,9]]);
  });
  it('case 6', function() {
    expect(insertInterval([], [3,4])).to.be.eql([[3,4]]);
  });
  it('case 7', function() {
    expect(insertInterval([[3,4],[5,6]], [1,2])).to.be.eql([[1,2],[3,4],[5,6]]);
  });
  it('case 8', function() {
    expect(insertInterval([[1,2],[3,4]], [5,6])).to.be.eql([[1,2],[3,4],[5,6]]);
  });
  it('case 9', function() {
    expect(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [3,11])).to.be.eql([[1,2],[3,11],[12,16]]);
  });
  it('case 10', function() {
    expect(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [5,11])).to.be.eql([[1,2],[3,11],[12,16]]);
  });
   it('case 11', function() {
    expect(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [3,9])).to.be.eql([[1,2],[3,10],[12,16]]);
  });
});
