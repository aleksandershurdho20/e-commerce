import React from "react";
import Men from "../../assets/men.jpg";
import Women from "../../assets/women.jpg";
import "../Directory/Directory.scss";
export default function Directoy() {
  return (
    <div className="shopping-intro">
      <div className="global-container">
        <div style={{ backgroundImage: `url(${Men})` }} className="item">
          <a>Shop men</a>
        </div>
        <div style={{ backgroundImage: `url(${Women})` }} className="item">
          <a>Shop Women</a>
        </div>
      </div>
    </div>
  );
}
