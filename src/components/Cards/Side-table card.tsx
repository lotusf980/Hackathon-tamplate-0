import Image from "next/image";
import React from "react";

type Props = {
    img: string;
    title: string;
    btnName: string;
};



const SideTableCard =({img,title,btnName} : Props)=>  {
    
  return (
    <div>
      <Image
        src={img}
        height={200}
        width={370}
        alt="side-table"
        className=" ml-5"
      />
      <h3 className=" text-2xl mt-8">{title}</h3>
      <div className=" mt-2 underline">{btnName} </div>
    </div>
  );
};
export default SideTableCard;
