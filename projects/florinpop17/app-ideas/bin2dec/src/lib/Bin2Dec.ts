// Rules:
// 1. Arrays may not be used to contain the binary digits entered by the user
// 2. Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function, for example the natural logarithm. It's up to you to figure out which function to use.

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
  // Recursive function to convert binary to decimal
  const reducer = (bin: string, digit: number, decSum: number): number => {
    // The position for a character in the binary string to slice
    const position = bin.length - digit;

    // The target digit's binary (0 or 1)
    const target = parseInt(bin[position], baseBinary);

    // Calc the decimal for the target
    const power = digit - 1;
    const dec = target * baseBinary ** power;

    // console.log(bin, digit, power, target, dec);

    if (power === 0) {
      return decSum + dec;
    }
    return reducer(bin, digit - 1, decSum + dec);
  };

  // Binary to decimal
  const decimal = reducer(binary, binary.length, 0);
  return decimal;
};

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
