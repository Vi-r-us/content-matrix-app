/* eslint-disable no-unused-vars */
import React from "react";
import { heroTitle } from "../../data";
import "./hero.css";
import { Button, YoutubeVideo } from "../UtilityComponents";

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
        <YoutubeVideo
          className={"long-format-video"}
          videoURL="https://www.youtube.com/embed/VUDQL8B1Bb4?si=hqK2z0yxV5vT9oBi"
        />
        <div className="button-wrapper flex" direction="row">
          <Button className="gradient-btn" href="book-a-call">
            book a call
          </Button>
          <Button className="transparent-btn" href="book-a-call">
            see our work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
