import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/eagle.png" alt="site-logo" width={50} height={50} />
        </Link>
        <div>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
