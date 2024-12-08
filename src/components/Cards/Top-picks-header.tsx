import React from "react";



    export default function TopPicksHeader() {
        const title = "Top Picks";
        const description = "Check out our top picks for you!";

  return (
    <div>
      <h1 className=" text-4xl font-semibold">{title}</h1>
      <p className=" text-lg  mt-5 text-[#9F9F9F]">{description}</p>
    </div>
  );
};

