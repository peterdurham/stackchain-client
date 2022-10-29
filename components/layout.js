import { useState } from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import SideMenu from "./sideMenu";
import styled from "styled-components";

const MainSectionWrapper = styled.main`
  margin-left: 260px;
  width: calc(100% - 260px);
`;

const PageContentWrapper = styled.main`
  padding-top: 72px;
`;

const Layout = ({ children }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      <MainSectionWrapper>
        <Navbar />
        <PageContentWrapper>{children}</PageContentWrapper>
        <Footer />
      </MainSectionWrapper>
    </div>
  );
};

export default Layout;
