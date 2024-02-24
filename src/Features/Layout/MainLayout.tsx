import React from "react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { MainContent, MainLayoutContainer } from "../styled";
import Header from "./Header";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainLayoutContainer>
      <Header />
      <MainContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </MainContent>
      <Footer />
    </MainLayoutContainer>
  );
};

export default MainLayout;
