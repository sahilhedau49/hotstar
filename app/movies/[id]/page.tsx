import Image from "next/image";
import React from "react";

class URLParams {
  id: Number | undefined;
}

const page = async (props: any) => {
  const id = props.params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6c0d0afbcemsh6f72cb828b7adc2p1ca4c3jsn05848e41c10b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  // console.log(data[0].details);
  const main_data = data[0].details;

  return (
    <div className="mb-20 bg">
      <h2 className="mx-40 my-10 font-semibold text-2xl">
        Disney+ Hotstar /{" "}
        <span className="text-gradient font-bold text-3xl">
          {main_data.type}
        </span>
      </h2>
      <div className="w-[50%] mx-auto">
        <div>
          <div className="mb-10">
            <Image
              src={main_data.backgroundImage.url}
              alt={main_data.title}
              width={main_data.backgroundImage.width}
              height={main_data.backgroundImage.height}
              className="min-w-full"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <span className="text-4xl font-bold">{main_data.title}</span>
              <span className="text-xl font-medium">
                {main_data.creators[0]
                  ? `- By ${main_data.creators[0].name}`
                  : ``}
              </span>
            </div>
            <p className="mt-6 text-2xl">{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
