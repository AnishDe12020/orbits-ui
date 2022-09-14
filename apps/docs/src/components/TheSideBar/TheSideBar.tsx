import { Link, VStack, HStack, Text, Icon, StackProps } from "@chakra-ui/react";
import { ReaderIcon, VideoIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";

const TheSideBar = (props: StackProps) => {
  return (
    <VStack alignItems="start" {...props}>
      <NextLink href="/guides" passHref>
        <Link as={HStack} spacing={2}>
          <Icon as={VideoIcon} />
          <Text>Guides</Text>
        </Link>
      </NextLink>
      <NextLink href="/guides" passHref>
        <Link as={HStack} spacing={2}>
          <Icon as={ReaderIcon} />
          <Text>Docs</Text>
        </Link>
      </NextLink>
    </VStack>
  );
};

export default TheSideBar;
