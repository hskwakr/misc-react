// Rules:
// 1. Arrays may not be used to contain the binary digits entered by the user
// 2. Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function, for example the natural logarithm. It's up to you to figure out which function to use.

export const Bin2Dec = (binaryStr: string) => {
  // Validate binary string
  if (!validateBinaryString(binaryStr)) {
    return '';
  }

  // Calc decimal
  const decimal = binaryToDecimal(binaryStr);

  // Number to String for decimal
  const decimalStr = decimal.toString();

  return decimalStr;
};

// The base of the radix for binary
const baseBinary = 2;

// The binary string should be 8 digit binary(0 or 1)
const validateBinaryString = (binaryStr: string) => {
  const pattern = /^[01]{8}$/;
  const found = binaryStr.match(pattern);
  return found != null;
};

// Convert binary to decimal
const binaryToDecimal = (binary: string) => {
  // The result of convertion
  let decimal = 0;

  // Loop for each digit from 2^0 to 2^7
  binary
    .split('')
    .reverse()
    .forEach((digit, power) => {
      const target = parseInt(digit, baseBinary);
      const dec = target * baseBinary ** power;

      decimal += dec;
      // console.log(binary, digit, power, target, dec, decimal);
    });

  return decimal;
};
