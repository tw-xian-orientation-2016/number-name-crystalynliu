describe('addUnit()', function() {
  var Units = loadUnits();

  it('correct result when have 1 string', function() {
    var result = addUnit(["one hundred and one"],Units);
    expect(result).toEqual(["one hundred and one"]);
  });

  it('correct result when have 2 string', function() {
    var result = addUnit(["one hundred and one","twenty"],Units);
    expect(result).toEqual(["one hundred and one","twenty thousand"]);
  });

  it('correct result when have 3 string && second is ""', function() {
    var result = addUnit(["one hundred and one","","twenty"],Units);
    expect(result).toEqual(["one hundred and one","","twenty million"]);
  });

  it('correct result when have 3 string && first and second both is ""', function() {
    var result = addUnit(["","","twenty"],Units);
    expect(result).toEqual(["","","twenty million"]);
  });

  it('correct result when have 3 string', function() {
    var result = addUnit(["one hundred and one","eleven","twenty"],Units);
    expect(result).toEqual(["one hundred and one","eleven thousand","twenty million"]);
  });

  it('correct result when have 4 string', function() {
    var result = addUnit(["one hundred and one","eleven","one hundred and twenty","nine"],Units);
    expect(result).toEqual(["one hundred and one","eleven thousand"
      ,"one hundred and twenty million","nine billion"]);
  });

  
});