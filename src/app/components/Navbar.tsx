import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import UserCard from "./UserCard";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/eagle.png" alt="site-logo" width={50} height={50} />
        </Link>
        <div>
          {session ? (
            <UserCard user={session?.user} />
          ) : (
            // <Link href="/api/auth/signout">
            //   <h1>Sign Out</h1>
            // </Link>
            <Link href="/api/auth/signin">
              <button className="sign-in-btn">Sign In</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
