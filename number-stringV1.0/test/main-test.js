describe('number to string', function() {

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("99");
    var expectText ='ninety nine';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("300");
    var expectText ='three hundred';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("310");
    var expectText ='three hundred and ten';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("1501");
    var expectText ='one thousand, five hundred and one';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("12609");
    var expectText ='twelve thousand, six hundred and nine';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("512607");
    var expectText ='five hundred and twelve thousand, six hundred and seven';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("43112603");
    var expectText ='forty three million, one hundred and twelve thousand, six hundred and three';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("43110003");
    var expectText ='forty three million, one hundred and ten thousand and three';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("43010103");
    var expectText ='forty three million and ten thousand, one hundred and three';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("43010003");
    var expectText ='forty three million and ten thousand and three';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    numberToString("100000001");
    var expectText ='one hundred million and one';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});