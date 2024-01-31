/* eslint-disable no-unused-vars */
import React from "react";
import { heroTitle } from "../../data";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section flex" direction="col">
      <div className="hero-heading-text flex" direction="col">
        <h1 className="hero-title-one">
          <strong>{heroTitle.text1}</strong>
          <span>
            <strong>{heroTitle.text2}</strong>
          </span>
          <strong>{heroTitle.text3}</strong>
          <span>
            <strong>
              <br /> {heroTitle.text4}
            </strong>
          </span>
        </h1>

        <h2 className="hero-title-two">
          <strong>
            <em>{heroTitle.text5}</em>
          </strong>
        </h2>
      </div>

      <div className="hero-video flex" direction="col">
        <div className="button-wrapper flex" direction="row">
          <div className="book-call-button">
            <a href="/book-a-call">book a call</a>
          </div>
          <div className="see-work-button">
            <a href="/book-a-call">see our work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
