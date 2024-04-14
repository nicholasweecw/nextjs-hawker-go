import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Image src="/eagle.png" alt="site-logo" width={50} height={50} />
        <div>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
