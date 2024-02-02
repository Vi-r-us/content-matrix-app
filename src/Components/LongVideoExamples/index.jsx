/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Button, YoutubeVideo } from "../UtilityComponents";
import "./long-video-examples.css";
import { longVideoExamples } from "../../data";

const LongVideoExamples = () => {
  return (
    <section className="long-video-examples-section flex" direction="col">
      <h2>examples of the work:</h2>
      <div className="long-video-wrapper">
        {longVideoExamples.map((longVideo, index) => (
          <LongVideoDiv
            key={index}
            longVideo={longVideo}
            isEven={longVideoExamples.length % 2 == 0}
          />
        ))}
      </div>
      <Button className={"gradient-btn"} href={"book-a-call"}>
        book a call
      </Button>
    </section>
  );
};

const LongVideoDiv = ({ longVideo, isEven }) => {
  const { name, company, videoURL } = longVideo;
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // when the component gets mounted
    setWidth(ref.current.offsetWidth);
    // to handle page resize
    const getWidth = () => {
      setWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getWidth);
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <div
      className={`long-video flex ${isEven ? "even" : "odd"}`}
      direction="col"
      ref={ref}
    >
      <h3>
        <strong>{name}</strong>
        <br />
        {company}
      </h3>
      <YoutubeVideo
        className={"long-format-video"}
        parentWidth={width}
        videoURL={videoURL}
      />
    </div>
  );
};

export default LongVideoExamples;
