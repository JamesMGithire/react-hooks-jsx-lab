import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div>About
    <div id="about">
    <h2>About Me</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit nisi, voluptatibus accusamus quia repellat.</p>
    <img src={image} alt="I made this"/>
    </div>
  </div>);
}

export default About;
