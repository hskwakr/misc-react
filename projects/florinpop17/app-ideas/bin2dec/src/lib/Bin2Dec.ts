// Rules:
// 1. Arrays may not be used to contain the binary digits entered by the user
// 2. Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function, for example the natural logarithm. It's up to you to figure out which function to use.

// The binary string should be 8 digit binary(0 or 1)
const validateBinaryString = (binaryStr: string) => {
  const pattern = /^[01]{8}$/;
  const found = binaryStr.match(pattern);
  return found != null;
};

// Convert binary to decimal
const ConvertBin2Dec = (binary: number) => {
  // Recursive function to convert binary to decimal
  const reducer = (bin: number, digit: number, decSum: number): number => {
    // The position for a character in the binary string to slice
    const position = bin.toString().length - digit;

    // The power of binary digit
    const power = digit - 1;

    // The target digit's binary (0 or 1)
    const target = Number(bin.toString().slice(position, position + 1));
    if (target === 0) {
      if (power === 0) {
        return decSum;
      }
      return reducer(bin, digit - 1, decSum);
    }

    // Calc the decimal for the target
    const dec = target * 2 ** power;

    // console.log(bin, digit, power, target, dec);

    if (power === 0) {
      return decSum + dec;
    }
    return reducer(bin, digit - 1, decSum + dec);
  };

  // Binary to decimal
  const decimal = reducer(binary, binary.toString().length, 0);

  return decimal;
};

export const Bin2Dec = (binaryStr: string) => {
  // Validate binary string
  if (!validateBinaryString(binaryStr)) {
    return '';
  }

  // String to Number for binary
  const binary = Number(binaryStr);

  // Calc decimal
  const decimal = ConvertBin2Dec(binary);

  // Number to String for decimal
  const decimalStr = decimal.toString();

  return decimalStr;
};
