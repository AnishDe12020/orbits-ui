import type { GetStaticProps, NextPage } from "next";
import {
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { allGuides, Guide } from ".contentlayer/generated";
import NextLink from "next/link";

interface IGuidePageProps {
  guides: Guide[];
}

const GuidesPage: NextPage<IGuidePageProps> = ({ guides }) => {
  return (
    <Container>
      <Heading
        as="h1"
        fontSize="7xl"
        color={useColorModeValue("cyan.700", "cyan.500")}
      >
        Guides
      </Heading>
      <VStack mt={6}>
        {guides.map(guide => {
          return (
            <LinkBox
              as="article"
              bg="brand.secondary"
              border="1px solid"
              borderColor="brand.tertiary"
              rounded="lg"
              p={4}
              w="full"
              cursor="pointer"
              transitionDuration="0.2s"
              transitionTimingFunction="ease-out"
              transitionProperty="all"
              _hover={{
                borderColor: "brand.quaternary",
              }}
            >
              <Heading
                as="h2"
                textColor={useColorModeValue("gray.700", "gray.300")}
                fontSize="3xl"
              >
                <NextLink href={`/guides/${guide.slug}`}>
                  <LinkOverlay>{guide.title}</LinkOverlay>
                </NextLink>
              </Heading>
            </LinkBox>
          );
        })}
      </VStack>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const guides = allGuides;

  return {
    props: {
      guides,
    },
  };
};

export default GuidesPage;
