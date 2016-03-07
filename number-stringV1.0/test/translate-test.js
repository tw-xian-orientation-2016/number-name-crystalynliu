describe('translate()', function() {
  var strings 

  beforeEach(function(){
    strings = loadDictionary();
  })

  it('correct result when number < 20', function() {
    var inputs = [["0"],["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"],
                ["10"],["11"],["12"],["13"],["14"],["15"],["16"],["17"],["18"],
                ["19"]];
    
    var expectations = [["zero"],["one"],["two"],["three"],["four"],["five"],
                ["six"],["seven"],["eight"],["nine"],["ten"],["eleven"],
                ["twelve"],["thirteen"],["fourteen"],["fifteen"],["sixteen"],
                ["seventeen"],["eighteen"],["nineteen"]];

    inputs.forEach(function(input,index){
      expect(translate(input,strings)).toEqual(expectations[index]);
    })
  });

  it('correct result when number = 20',function(){
    var result = translate(["20"],strings);
    expect(result).toEqual(["twenty"]);
  })

  it('correct result when number > 20 && number < 100', function() {
    var result = translate(["31"],strings);
    expect(result).toEqual(["thirty one"]);
  });

  it('correct result when number = 100', function() {
    var result = translate(["100"],strings);
    expect(result).toEqual(["one hundred"]);
  });

  it('correct result when number > 100 && number < 120', function() {
    var result = translate(["111"],strings);
    expect(result).toEqual(["one hundred and eleven"]);
  });

  it('correct result when number > 120 && number < 1000', function() {
    var result = translate(["142"],strings);
    expect(result).toEqual(["one hundred and forty two"]);
  });

  it('correct result when have two number that first number have two zero', function() {
    var result = translate(["002","11"],strings);
    expect(result).toEqual(["two","eleven"]);
  });

  it('correct result when have two number that first number have one zero', function() {
    var result = translate(["042","101"],strings);
    expect(result).toEqual(["forty two","one hundred and one"]);
  });




});