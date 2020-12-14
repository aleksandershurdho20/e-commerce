import React from "react";
import Directory from "../Components/Directory/Directoy";
import Slider from "../Components/Slider/Index";
import "../Components/Directory/Directory.scss";

export default function Index({ initialValue }) {
  console.log(initialValue, "props");
  return (
    <div style={{ height: "100%" }}>
      <Slider />
      <div className="inner-container">
        <Directory />
      </div>
    </div>
  );
}
