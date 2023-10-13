import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ data }) => {
  const { id, title, type, synopsis } = data.jawSummary;

  return (
    <>
      <div className="card-hover flex flex-col justify-between w-80 card-bg p-6 rounded-xl">
        <div className="mb-3">
          <div>
            <Image
              src={data.jawSummary.backgroundImage.url}
              alt={title}
              width={1000}
              height={550}
              className="image w-[100%] rounded-tl-xl rounded-tr-xl"
            />
          </div>
          <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">
              {`${title.substring(0, 24)}`}
            </h2>
            <p>{`${synopsis.substring(0, 100)} ...`}</p>
          </div>
        </div>
        <Link href={`/movies/${id}`}>
          <button className="btn rounded-full px-4 py-1">Read More</button>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
