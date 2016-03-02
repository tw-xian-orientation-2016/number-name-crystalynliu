describe('Test the function CovertToText', function() {
  var numberDictionary = loadNumDictionary();

  it('Covert one bit number', function() {
    var result = covertToText(["0"],numberDictionary);
    expect(result).toEqual(["zero"]);
  });

  it('Covert one bit number', function() {
    var result = covertToText(["1"],numberDictionary);
    expect(result).toEqual(["one"]);
  });

  it('Covert one bit number', function() {
    var result = covertToText(["10"],numberDictionary);
    expect(result).toEqual(["ten"]);
  });

  it('Covert two bit number', function() {
    var result = covertToText(["12"],numberDictionary);
    expect(result).toEqual(["twelve"]);
  });

  it('Covert other two bit number', function() {
    var result = covertToText(["20"],numberDictionary);
    expect(result).toEqual(["twenty"]);
  });

  it('Covert another two bit number', function() {
    var result = covertToText(["31"],numberDictionary);
    expect(result).toEqual(["thirty one"]);
  });

  it('Covert three bit number', function() {
    var result = covertToText(["100"],numberDictionary);
    expect(result).toEqual(["one hundred"]);
  });

  it('Covert other three bit number', function() {
    var result = covertToText(["105"],numberDictionary);
    expect(result).toEqual(["one hundred and five"]);
  });

  it('Covert another three bit number', function() {
    var result = covertToText(["111"],numberDictionary);
    expect(result).toEqual(["one hundred and eleven"]);
  });

  it('Covert third three bit number', function() {
    var result = covertToText(["142"],numberDictionary);
    expect(result).toEqual(["one hundred and forty two"]);
  });

  it('Covert four bit number', function() {
    var result = covertToText(["142","1"],numberDictionary);
    expect(result).toEqual(["one hundred and forty two","one"]);
  });

  it('Covert five bit number', function() {
    var result = covertToText(["142","11"],numberDictionary);
    expect(result).toEqual(["one hundred and forty two","eleven"]);
  });

  it('Covert other five bit number', function() {
    var result = covertToText(["002","11"],numberDictionary);
    expect(result).toEqual(["two","eleven"]);
  });

  it('Covert six bit number', function() {
    var result = covertToText(["142","100"],numberDictionary);
    expect(result).toEqual(["one hundred and forty two","one hundred"]);
  });

  it('Covert other six bit number', function() {
    var result = covertToText(["142","101"],numberDictionary);
    expect(result).toEqual(["one hundred and forty two","one hundred and one"]);
  });

  it('Covert another six bit number', function() {
    var result = covertToText(["042","101"],numberDictionary);
    expect(result).toEqual(["forty two","one hundred and one"]);
  });




});