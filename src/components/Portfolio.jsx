import React, { useState } from "react";
import PortfolioCard from "./PorfolioCard";
import { portfolioData } from "../data/portfolioData";

const Portfolio = () => {
  const [itemsCount, setItemsCount] = useState(3);

  const updateItemsCount = () => {
    if (itemsCount <= portfolioData.length) {
      setItemsCount((prev) => prev + 5);
    } else {
      setItemsCount(3);
    }
  };

  return (
    <div className="container" id="portfolio">
      <h1 className="text-3xl md:text-xl sm:text-xl uppercase font-medium text-center text-[#08A7E8]">
        My Portfolio
      </h1>
      <div className="portfolio__content">
        {portfolioData.slice(0, itemsCount).map((item) => (
          <PortfolioCard key={item.id} itemData={item} />
        ))}
      </div>
      <button className="portfolio-button" onClick={updateItemsCount}>
        {itemsCount <= portfolioData.length ? "Show More..." : "Show Less"}
      </button>
    </div>
  );
};

export default Portfolio;
