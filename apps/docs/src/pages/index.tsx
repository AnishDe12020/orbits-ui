import {
  Container,
  Center,
  Heading,
  VStack,
  Code,
  HStack,
  IconButton,
  useClipboard,
  Button,
  Icon,
  Text,
  chakra,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";

const COMMAND = "yarn add";
const PACKAGES =
  "@chakra-ui/react @emotion/react @emotion/styled framer-motion @orbits-ui/chakra-theme";

const INSTALL_COMMAND = `${COMMAND} ${PACKAGES}`;

const Home: NextPage = () => {
  const { onCopy: onInstallCommandCopy, hasCopied: hasCopiedInstallCommand } =
    useClipboard(INSTALL_COMMAND);

  return (
    <Container as={Center} mt={16}>
      <VStack spacing={16}>
        <VStack spacing={4}>
          <Heading as="h1" fontSize="7xl">
            Orbits UI
          </Heading>
          <Heading
            as="h2"
            textColor={useColorModeValue("gray.700", "gray.300")}
            fontSize="3xl"
          >
            A Chakra UI Theme
          </Heading>
        </VStack>

        <Button
          bg="brand.secondary"
          justifyContent="center"
          alignItems="center"
          rounded="full"
          cursor="copy"
          onClick={onInstallCommandCopy}
          pl={6}
          pr={4}
          h={12}
          as={HStack}
          spacing={6}
          textAlign="center"
          role="group"
        >
          <Text textColor={useColorModeValue("gray.700", "gray.300")}>
            <chakra.span textColor="green.400">{COMMAND}</chakra.span>{" "}
            {PACKAGES}
          </Text>
          <chakra.span
            bg={
              hasCopiedInstallCommand
                ? useColorModeValue("green.400", "green.600")
                : "brand.tertiary"
            }
            rounded="full"
            w={8}
            h={8}
            as={Flex}
            alignItems="center"
            justifyContent="center"
            _groupHover={{
              bg: hasCopiedInstallCommand ? "green.500" : "brand.quaternary",
            }}
          >
            <Icon
              as={hasCopiedInstallCommand ? CheckIcon : CopyIcon}
              aria-label={"Copy Command"}
              w={4}
              h={4}
              textAlign="center"
            />
          </chakra.span>
        </Button>
      </VStack>
    </Container>
  );
};

export default Home;
