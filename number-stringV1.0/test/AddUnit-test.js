describe('Test the function AddUnit', function() {
  var Units = loadUnits();

  it('Add unit to one string', function() {
    var result = addUnit(["one hundred and one"],Units);
    expect(result).toEqual(["one hundred and one"]);
  });

  it('Add unit to two string', function() {
    var result = addUnit(["one hundred and one","twenty"],Units);
    expect(result).toEqual(["one hundred and one","twenty thousand"]);
  });

  it('Add unit to three string', function() {
    var result = addUnit(["one hundred and one","","twenty"],Units);
    expect(result).toEqual(["one hundred and one","","twenty million"]);
  });

  it('Add unit to other three string', function() {
    var result = addUnit(["one hundred and one","eleven","twenty"],Units);
    expect(result).toEqual(["one hundred and one","eleven thousand","twenty million"]);
  });

  it('Add unit to four string', function() {
    var result = addUnit(["one hundred and one","eleven","one hundred and twenty","nine"],Units);
    expect(result).toEqual(["one hundred and one","eleven thousand"
      ,"one hundred and twenty million","nine billion"]);
  });

  
});