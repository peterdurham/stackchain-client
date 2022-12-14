import { useState } from "react";
import Image from "next/image";
import TopNav from "./topNav";
import Footer from "./footer";
import SideMenu from "./sideMenu";
import styled from "styled-components";

const MainSectionWrapper = styled.main`
  margin-left: 260px;
  width: ${({ menuOpen = false }) =>
    menuOpen ? "calc(100% - 260px)" : "100%"};

  @media (max-width: 1000px) {
    margin-left: 0;
    width: 100%;
  }
`;

const PageContentWrapper = styled.main`
  padding-top: 72px;
`;

const BackdropStyles = styled.div`
  display: none;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  transition: all 0.3s;

  @media (max-width: 1000px) {
    display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
  }
`;

const Layout = ({ children, menuOpen, setMenuOpen }) => {
  return (
    <div style={{ display: "flex" }}>
      <SideMenu menuOpen={menuOpen} />
      <MainSectionWrapper menuOpen={menuOpen}>
        <TopNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <PageContentWrapper>{children}</PageContentWrapper>
        <Footer />
      </MainSectionWrapper>
      <BackdropStyles
        onClick={() => setMenuOpen(false)}
        menuOpen={menuOpen}
      ></BackdropStyles>
    </div>
  );
};

export default Layout;
