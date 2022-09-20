import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={{color:"firebrick"}}>Your Name is {name}a Web Developer from Your City {city}</h1>
    </div>
  );
}

export default Home;
