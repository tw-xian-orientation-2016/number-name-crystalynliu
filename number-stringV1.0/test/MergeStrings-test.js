describe('mergeStrings()', function() {
  var connector = loadConnector();

  it('Merge 1 string', function() {
    var result = mergeStrings(["one hundred and one"],connector);
    expect(result).toEqual("one hundred and one");
  });

  it('Merge 2 string && first have and', function() {
    var result = mergeStrings(["one hundred and one","twenty thousand"],connector);
    expect(result).toEqual("twenty thousand, one hundred and one");
  });

  it('Merge 2 string && first do not have and', function() {
    var result = mergeStrings(["one","twenty thousand"],connector);
    expect(result).toEqual("twenty thousand and one");
  });


  it('Merge 3 string && first and second both have and', function() {
    var result = mergeStrings(["one hundred and one","two hundred and eleven thousand","twenty million"],connector);
    expect(result).toEqual("twenty million, two hundred and eleven thousand, one hundred and one");
  });

  it('Merge 3 string && first do not have and', function() {
    var result = mergeStrings(["one","two hundred and eleven thousand","twenty million"],connector);
    expect(result).toEqual("twenty million, two hundred and eleven thousand and one");
  });

  it('Merge 3 string && second do not have and', function() {
    var result = mergeStrings(["one hundred and one","eleven thousand","twenty million"],connector);
    expect(result).toEqual("twenty million and eleven thousand, one hundred and one");
  });

  it('Merge 3 string && first and second do not have and', function() {
    var result = mergeStrings(["one","eleven thousand","twenty million"],connector);
    expect(result).toEqual("twenty million and eleven thousand and one");
  });

  it('Merge 3 string && first and second is ""', function() {
    var result = mergeStrings(["","","twenty million"],connector);
    expect(result).toEqual("twenty million");
  });

  it('Merge 3 string && second is ""', function() {
    var result = mergeStrings(["one","","twenty million"],connector);
    expect(result).toEqual("twenty million and one");
  });

  it('Merge 3 string && first is ""', function() {
    var result = mergeStrings(["","two hundred and one thousand","twenty million"],connector);
    expect(result).toEqual("twenty million, two hundred and one thousand");
  });
  
});