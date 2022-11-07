import {
  useColorMode,
  useColorModeValue,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function Cart() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <Text color={textColor}>...</Text>
    </VStack>
  );
}
