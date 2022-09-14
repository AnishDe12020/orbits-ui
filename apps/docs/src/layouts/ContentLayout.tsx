import {
  Container,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
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
        <TheSideBar pt={12} mr={8} px={4} />
        <Container mt={8}>{children}</Container>
      </HStack>
    </MainLayout>
  );
};

export default ContentLayout;
