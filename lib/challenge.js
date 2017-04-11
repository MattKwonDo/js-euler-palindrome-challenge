'use strict'
// The decimal number, 585, is 1001001001 in binary, and is palindromic in both bases.
// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
1 to 100 =
// need to filter and then sum the result?

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
let array = []
// let convert = function(){

(function(){

    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };

// binary to decimal
ConvertBase.bin2dec = function (num) {
    return ConvertBase(num).from(2).to(10);
};

// binary to hexadecimal
ConvertBase.bin2hex = function (num) {
    return ConvertBase(num).from(2).to(16);
};

// decimal to binary
ConvertBase.dec2bin = function (num) {
    return ConvertBase(num).from(10).to(2);
};

// decimal to hexadecimal
ConvertBase.dec2hex = function (num) {
    return ConvertBase(num).from(10).to(16);
};

// hexadecimal to binary
ConvertBase.hex2bin = function (num) {
    return ConvertBase(num).from(16).to(2);
};

// hexadecimal to decimal
ConvertBase.hex2dec = function (num) {
    return ConvertBase(num).from(16).to(10);
};

this.ConvertBase = ConvertBase;

})(this);



let doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  // base 10
  for (let i = 1; i < upperLimit; i++) {
    i = i + ""
    if (i === i.split("").reverse().join("")) {
      array.push(i)
    }
  }
  console.log(array.length)
  // console.log(array)
  // base 2
  for (let i = 1; i < upperLimit; i++) {
    i = ConvertBase.dec2bin(i)
    i = i + ""
    if (i === i.split("").reverse().join("")) {
      array.push(i)
    }
  }
  console.log(array.length)
  // console.log(array)
  return Math.sum(array)
}
doubleBasePalindromeSum(2, 10, 1000000)

b = base
2*k = length
k = length/2

palindromes = (b-1)*b^(k-1)

module.exports = {
  doubleBasePalindromeSum
}
