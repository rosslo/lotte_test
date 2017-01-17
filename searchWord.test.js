var searchWord = require('./searchWord.js');
var expect = require('chai').expect;
describe('searchWord函數的測試', function() {
  it('case 1', function() {
    expect(searchWord([
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ] ,"ABCCED")).to.be.equal(true);
  });
  it('case 2', function() {
    expect(searchWord([
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ] ,"SEE")).to.be.equal(true);
  });
  it('case 3', function() {
    expect(searchWord([
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ] ,"ABCB")).to.be.equal(false);
  });
  it('case 4', function() {
    expect(searchWord([
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ] ,"ASADEE")).to.be.equal(true);
  });
  it('case 5', function() {
    expect(searchWord([
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ] ,"BSDCE")).to.be.equal(false);
  });
});
