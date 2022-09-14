import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "src/components/Navbar/Navbar";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default MainLayout;
