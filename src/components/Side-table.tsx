import React from "react";
import SideTableCard from "./Cards/Side-table card";

const SideTable = () => {
  return (
    <div className=" px-20 bg-[#FAF4F4] py-10 flex  justify-between">
      <SideTableCard
        img={"/sidetable-1.png"}
        title={"Side table"}
        btnName={"View More"}
      />
      <SideTableCard
        img={"/sidetable-2.png"}
        title={"Side table"}
        btnName={"View More"}
      />
    </div>
  );
};

export default SideTable;