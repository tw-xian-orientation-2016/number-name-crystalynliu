describe('Test the function mergeStrings', function() {
  var connector = loadConnector();

  it('Merge one string', function() {
    var result = mergeStrings(["one hundred and one"],connector);
    expect(result).toEqual(["one hundred and one"]);
  });

  it('Merge two string', function() {
    var result = mergeStrings(["one hundred and one","twenty thousand"],connector);
    expect(result).toEqual("twenty thousand,one hundred and one");
  });

  it('Merge two string', function() {
    var result = mergeStrings(["one","twenty thousand"],connector);
    expect(result).toEqual("twenty thousand and one");
  });

  it('Merge two string', function() {
    var result = mergeStrings(["one","three hundred and eleven thousand"],connector);
    expect(result).toEqual("three hundred and eleven thousand and one");
  });

  it('Merge three string', function() {
    var result = mergeStrings(["one hundred and one","two hundred and eleven thousand","twenty"],connector);
    expect(result).toEqual("twenty million,two hundred and eleven thousand,one hundred and one");
  });

  it('Merge three string', function() {
    var result = mergeStrings(["one","two hundred and eleven thousand","twenty"],connector);
    expect(result).toEqual("twenty million,two hundred and eleven thousand and one");
  });

  it('Merge three string', function() {
    var result = mergeStrings(["one hundred and one","eleven thousand","twenty"],connector);
    expect(result).toEqual("twenty million and eleven thousand,one hundred and one");
  });

  it('Merge three string', function() {
    var result = mergeStrings(["one","eleven thousand","twenty"],connector);
    expect(result).toEqual("twenty million and eleven thousand and one");
  });
  
});