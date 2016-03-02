describe('numberToString', function() {

  it('correct text when number is 0', function() {

    spyOn(console, 'log');

    numberToString("0");
    var expectText ='zero';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 99', function() {

    spyOn(console, 'log');

    numberToString("99");
    var expectText ='ninety nine';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 300', function() {

    spyOn(console, 'log');

    numberToString("300");
    var expectText ='three hundred';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 310', function() {

    spyOn(console, 'log');

    numberToString("310");
    var expectText ='three hundred and ten';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 1501', function() {

    spyOn(console, 'log');

    numberToString("1501");
    var expectText ='one thousand, five hundred and one';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 1001', function() {

    spyOn(console, 'log');

    numberToString("1001");
    var expectText ='one thousand and one';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 12609', function() {

    spyOn(console, 'log');

    numberToString("12609");
    var expectText ='twelve thousand, six hundred and nine';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 512607', function() {

    spyOn(console, 'log');

    numberToString("512607");
    var expectText ='five hundred and twelve thousand, six hundred and seven';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 43112603', function() {

    spyOn(console, 'log');

    numberToString("43112603");
    var expectText ='forty three million, one hundred and twelve thousand, six hundred and three';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 43110003', function() {

    spyOn(console, 'log');

    numberToString("43110003");
    var expectText ='forty three million, one hundred and ten thousand and three';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 43010103', function() {

    spyOn(console, 'log');

    numberToString("43010103");
    var expectText ='forty three million and ten thousand, one hundred and three';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 43010003', function() {

    spyOn(console, 'log');

    numberToString("43010003");
    var expectText ='forty three million and ten thousand and three';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct text when number is 100000001', function() {

    spyOn(console, 'log');

    numberToString("100000001");
    var expectText ='one hundred million and one';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
  it('correct text when number is 100000000', function() {

    spyOn(console, 'log');

    numberToString("100000000");
    var expectText ='one hundred million';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});