import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="mt-6 max-w-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-4xl my-10 font-semibold text-gradient text-center">
        Oops! Page Not Found
      </h1>
      <Image
        src={"/images/pagenotfound.webp"}
        className="rounded-2xl"
        width={1000}
        height={1000}
        alt="Page not found image"
      />
    </div>
  );
};

export default NotFound;
