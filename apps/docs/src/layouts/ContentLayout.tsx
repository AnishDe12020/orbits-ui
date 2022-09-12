import { Heading, HStack, useColorModeValue, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import TheSideBar from "src/components/TheSideBar/TheSideBar";
import MainLayout from "./MainLayout";

interface IContentLayoutProps {
  children: ReactNode;
}

const ContentLayout = ({ children }: IContentLayoutProps) => {
  return (
    <MainLayout>
      <HStack>
        <VStack
          pt={4}
          mr={8}
          px={4}
          borderRight="1px solid"
          borderRightColor="brand.secondary"
        >
          <Heading
            as="h1"
            fontSize="5xl"
            color={useColorModeValue("cyan.700", "cyan.500")}
          >
            Guides
          </Heading>
          <TheSideBar />
        </VStack>
        {children}
      </HStack>
    </MainLayout>
  );
};

export default ContentLayout;
