describe('divideNumber()', function() {
  
    it('correct result when length of string <=3', function() {
      var inputs = ["", "1", "12", "123"];
      var expectations = [[], ["1"], ["12"], ["123"]];

      inputs.forEach(function(input, index) {
        expect(divideNumber(input)).toEqual(expectations[index]);
      });
    })

    it('correct result when length of string >3', function() {
      var inputs = ["1234","12345","1234567","1234567890"];
      var expectations = [["234","1"],["345","12"],["567","234","1"],["890","567","234","1"]]

      inputs.forEach(function(input,index){
        expect(divideNumber(input)).toEqual(expectations[index]);
      })
    });

});