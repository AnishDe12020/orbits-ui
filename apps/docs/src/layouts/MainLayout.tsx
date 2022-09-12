import { ReactNode } from "react";
import Navbar from "src/components/Navbar/Navbar";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
