describe('Test the function mergeStrings', function() {
  var Connector = loadConnector();

  it('Merge one string', function() {
    var result = mergeStrings(["one hundred and one"],Connector);
    expect(result).toEqual(["one hundred and one"]);
  });

  it('Merge two string', function() {
    var result = mergeStrings(["one hundred and one","twenty thousand"],Connector);
    expect(result).toEqual("twenty thousand,one hundred and one");
  });

  it('Merge two string', function() {
    var result = mergeStrings(["one","twenty thousand"],Connector);
    expect(result).toEqual("twenty thousand and one");
  });

  it('Merge two string', function() {
    var result = mergeStrings(["one","three hundred and eleven thousand"],Connector);
    expect(result).toEqual("three hundred and eleven thousand and one");
  });

  it('Merge three string', function() {
    var result = mergeStrings(["one hundred and one","two hundred and eleven thousand","twenty"],Connector);
    expect(result).toEqual("twenty million,two hundred and eleven thousand,one hundred and one");
  });

  it('Merge three string', function() {
    var result = mergeStrings(["one","two hundred and eleven thousand","twenty"],Connector);
    expect(result).toEqual("twenty million,two hundred and eleven thousand and one");
  });

  it('Merge three string', function() {
    var result = mergeStrings(["one hundred and one","eleven thousand","twenty"],Connector);
    expect(result).toEqual("twenty million and eleven thousand,one hundred and one");
  });

  it('Merge three string', function() {
    var result = mergeStrings(["one","eleven thousand","twenty"],Connector);
    expect(result).toEqual("twenty million and eleven thousand and one");
  });
  
});