describe('Test the function divideNumber', function() {
  
  it('divide one bit number', function() {
    var result = divideNumber("1");
    expect(result).toEqual(["1"]);
  });

  it('divide two bit number', function() {
    var result = divideNumber("12");
    expect(result).toEqual(["12"]);
  });

  it('divide three bit number', function() {
    var result = divideNumber("123");
    expect(result).toEqual(["123"]);
  });

  it('divide four bit number', function() {
    var result = divideNumber("1234");
    expect(result).toEqual(["234","1"]);
  });

  it('divide five bit number', function() {
    var result = divideNumber("12345");
    expect(result).toEqual(["345","12"]);
  });

  it('divide seven bit number', function() {
    var result = divideNumber("1234567");
    expect(result).toEqual(["567","234","1"]);
  });

  it('divide ten bit number', function() {
    var result = divideNumber("1234567890");
    expect(result).toEqual(["890","567","234","1"]);
  });

});