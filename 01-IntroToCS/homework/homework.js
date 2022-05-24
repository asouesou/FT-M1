'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;
  for (var i = 0; i < num.length; i++)
  {
    suma = suma + (num[i] * 2 **(num.length-1 - i));
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let concatena = "";

  do 
  {
    concatena = (num % 2) + concatena;
  	num = Math.trunc(num/2);
    console.log(concatena);
  }while (num > 0);
   
  return concatena;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}