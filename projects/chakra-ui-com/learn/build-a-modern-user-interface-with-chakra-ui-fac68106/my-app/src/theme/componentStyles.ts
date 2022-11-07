import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const checkboxStyles = {
  baseStyle: {
    control: {
      borderRadius: "none",
      ...brandRing,
    },
  },
};

const buttonStyles = {
  variants: {
    primary: (props: Record<string, any> | StyleFunctionProps) => ({
      rounded: "none",
      ...brandRing,
      color: mode("white", "gray.800")(props),
      backgroundColor: mode("brand.500", "brand.200")(props),

      _hover: {
        backgroundColor: mode("brand.600", "brand.300")(props),
      },

      _active: {
        backgroundColor: mode("brand.700", "brand.400")(props),
      },
    }),
  },
};

const componentStyles = {
  Input: { ...inputSelectStyles },
  Select: { ...inputSelectStyles },
  Checkbox: { ...checkboxStyles },
  Button: { ...buttonStyles },
};

export default componentStyles;
