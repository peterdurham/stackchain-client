import Link from "next/link";
import logo from "../public/logo.jpeg";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container">
      <div>
        <Image src={"/logo.jpeg"} width={50} height={50} />
      </div>
      <ul>
        <li>
          <Link href="/blocks">Block</Link>
          <Link href="/add-block">Add Block</Link>
          <a>Link 1</a>
          <a>Link 1</a>
        </li>
      </ul>
      <div>Login</div>
    </nav>
  );
};

export default Navbar;
