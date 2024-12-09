import React from "react";
type TopPickHeaderProps = {
  title: string;
  description: string;
};

const TopPickHeader: React.FC<TopPickHeaderProps> = () => {
  const title = "Top Picks";
          const description = "Check out our top picks for you!"; 
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TopPickHeader;





