import React from "react";
import TopPickHeader from "./Cards/Top-picks-header";
import TopPicksCard from "./Cards/Top-picks card";



const TopPicks = () => {
  return (
    <div className=" py-10  px-16">
      <div className=" flex justify-center   text-center">
        <TopPickHeader
          title={"Top Picks For You"}
          description={
            "Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
          }
        />
      </div>

      <div className=" grid grid-cols-4 mt-5 gap-10 w-full">
        <TopPicksCard img="/top pick-1.png" />
        <TopPicksCard img="/top pick-2.png" />
        <TopPicksCard img="/top pick-3.png" />
        <TopPicksCard img="/top pick-4.png" />
      </div>
    </div>
  );
};

export default TopPicks;