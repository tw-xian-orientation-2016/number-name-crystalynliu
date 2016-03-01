function divideNumber(number) {
  var NumberArray = [];

  var divide = parseInt(number.length/3);
  for(var i = 0 ; i < divide ; i++){
    NumberArray.push(number.slice(-3));
    number = number.substring(0,number.length-3);
  }
  if(number.length!==0){
    NumberArray.push(number);
  }

  return NumberArray;
}

