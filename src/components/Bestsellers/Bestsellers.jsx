import React from "react";
import { Viewall } from "../viewall/Viewall.jsx";
import { mocoData } from "../../moco-data/mocoData.js";
import "../bestsellers/Bestsellers.css";
import { Products } from "../Products/Products.jsx";

export const Bestsellers = () => {
  return (
    <div className="bestsellers__main">
      <div className="bestsellers__wrapper">
        <h1 className="bestsellers__title">Bestsellers</h1>
        <Viewall />
        {mocoData.map((item, i) => (
          <Products 
          mobileRes={item.mobileUrl} 
          tableRes={item.tableUrl}
          name={item.name}
          isPrise={item.price}
          bool={true}
          />
        ))}
      </div>
    </div>
  );
};
