import { shortVideoExamples } from "../../data";
import { Button, YoutubeVideo } from "../UtilityComponents";
import "./short-video-examples.css";

const ShortVideoExamples = () => {
  return (
    <section className="short-video-examples-section flex" direction="col">
      <h2>Short-Form video examples</h2>
      <p>
        <strong>Videos Optimized for All Platforms</strong> Name any social
        media platform, we can handle it.
      </p>
      <ul className="short-video-wrapper">
        {shortVideoExamples.map((video, index) => (
          <li className="short-video" key={index}>
            <YoutubeVideo videoURL={video} className={"short-format-video"} />
          </li>
        ))}
      </ul>
      <Button  className={"gradient-btn"} href={"book-a-call"}>
        book a call
      </Button>
    </section>
  );
};

export default ShortVideoExamples;
