import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
      <Image
        src={"/images/loading.gif"}
        width={100}
        height={100}
        className="rounded-full"
        alt="Loading Image"
      />
    </div>
  );
};

export default Loading;
