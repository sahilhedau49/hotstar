import MovieCard from "@/components/MovieCard";
import React from "react";

const Movies = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6c0d0afbcemsh6f72cb828b7adc2p1ca4c3jsn05848e41c10b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <div className="mb-20">
      <h3 className="my-12 max-w-[90vw] mx-auto text-4xl font-bold text-gradient">
        Series & Movies
      </h3>
      <div className="max-w-[90vw] mx-auto grid grid-cols-4 gap-20">
        {main_data.map((currElm: any) => {
          return <MovieCard key={currElm.id} data={currElm} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
