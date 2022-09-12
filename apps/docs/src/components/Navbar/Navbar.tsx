import {
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const ColorModeIcon = useColorModeValue(MoonIcon, SunIcon);
  const nextColorMode = useColorModeValue("dark", "light");

  return (
    <HStack
      as="nav"
      justifyContent="end"
      pt={4}
      pb={4}
      px={{ base: 8, md: 16, lg: 24 }}
      borderBottom="1px solid"
      borderBottomColor="brand.secondary"
    >
      <IconButton
        aria-label={`Change to ${nextColorMode} mode`}
        as={ColorModeIcon}
        onClick={toggleColorMode}
        h={8}
        w={8}
        p={2}
      />
    </HStack>
  );
};

export default Navbar;
