import Link from "next/link";
import logo from "../public/logo.jpeg";
import styled from "styled-components";

import Image from "next/image";

const NavbarWrapper = styled.div`
  width: calc(100% - 260px);
  height: 72px;
  padding: 12px 24px;
  border-bottom: 1px solid rgb(240, 240, 240);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #fff;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>Menu Button</div>
      <div>Login</div>
    </NavbarWrapper>
  );
};

export default Navbar;
