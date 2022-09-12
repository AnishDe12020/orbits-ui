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
import TheSideBar from "src/components/TheSideBar/TheSideBar";
import ContentLayout from "src/layouts/ContentLayout";

interface IGuidePageProps {
  guides: Guide[];
}

const GuidesPage: NextPage<IGuidePageProps> = ({ guides }) => {
  return (
    <ContentLayout>
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
    </ContentLayout>
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
