import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-gray-950 py-4 text-white px-20 shadow-2xl drop-shadow-xl">
        <div>
          <Link href="/">
            <Image
              src={"/images/logo.svg"}
              width={100}
              height={100}
              alt="Disney Hotstar Logo"
              className="w-14"
            />
          </Link>
        </div>
        <div className="my-2">
          <ul className="flex gap-6 pt-1 px-1 text-lg">
            <li className="">
              <Link
                className="hover:bg-transparent hover:text-blue-600 "
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-transparent hover:text-blue-600"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-transparent hover:text-blue-600"
                href="/movies"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-transparent hover:text-blue-600"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
