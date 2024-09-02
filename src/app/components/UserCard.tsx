"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  // const greeting = user?.name ? (
  //   <div className="flex flex-col justify-center items-center w-[70%] p-6 rounded-lg text-xl text-black">
  //     Hello {user?.name}!
  //   </div>
  // ) : null;

  // const emailDisplay = user?.email ? (
  //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
  //         {user?.email}
  //     </div>
  // ) : null

  const userImage = user?.image ? (
    <div className="flex justify-end">
      <button
        onClick={() => setIsClicked((prev) => !prev)}
        className="flex relative w-12 h-12"
      >
        <Image
          className="rounded-full my-0 mx-auto object-cover"
          src={user?.image}
          fill={true}
          alt={user?.name ?? "Profile Pic"}
          priority={true}
        />
      </button>
    </div>
  ) : null;

  return (
    <section className="flex flex-col relative gap-1">
      {/* {greeting} */}
      {/* {emailDisplay} */}
      <div className="absolute right-0 top-[-24px] rounded-lg">
        {userImage}
        {isClicked && (
          <div className="mt-1 rounded-lg shadow-lg text-xl text-black bg-blue-100 hover:bg-blue-400 hover:text-white">
            <Link className="" href="/api/auth/signout">
              <p className="py-2 pl-10 pr-32">Logout</p>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
