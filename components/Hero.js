import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ title, imgUrl }) => {
  return (
    <div className="flex gradient-bg min-h-[30rem] items-center main-hero align-middle">
      <div className="flex justify-between relative items-center max-w-[70%] left-1/2 -translate-x-1/2">
        <div className="title w-[50%] mr-20">
          <h1 className="uppercase text-4xl font-bold">{title}</h1>
          <p className="my-10">
            From award-winning dramas to blockbuster action movies, we've got
            you covered. Browse our selection of the latest and greatest movies,
            and find your new favorite today.
          </p>
          <Link
            className="bg-slate-900 text-lg border-2 outline-none border-slate-900 text-slate-50 px-4 py-2 rounded-full hover:bg-slate-50 hover:text-slate-950 duration-300"
            href="/movies"
          >
            <button>Explore Movies</button>
          </Link>
        </div>
        <Image
          className="rounded-lg w-[50%]"
          src={imgUrl}
          alt="Watching netflix"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Hero;
