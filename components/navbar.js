import logo from "../public/logo.jpeg";
import styled from "styled-components";
import Link from "next/link";

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

  #menu-toggle {
    display: none;
  }

  @media (max-width: 1000px) {
    width: 100%;

    #menu-toggle {
      display: block;
    }
  }
`;

const Navbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <NavbarWrapper>
      <div>
        <button id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          Menu Button
        </button>
      </div>
      <Link href="/login">Login</Link>
    </NavbarWrapper>
  );
};

export default Navbar;
