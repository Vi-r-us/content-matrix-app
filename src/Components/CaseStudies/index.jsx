import { caseStudies } from "../../data";
import { Button, YoutubeVideo } from "../UtilityComponents";
import "./case-studies.css";

const CaseStudies = () => {
  return (
    <section className="case-studies-section">
      <div className="case-studies-wrapper">
        <aside className="case-study-texts flex" direction="col">
          <h3>Results we got for our clients</h3>
          <h2>
            And No, <span>You Do NOT Need a Large Audience </span>to See These
            Results...
          </h2>
          <p>
            Size Doesn&apos;t Matter: many of our clients have turned modest view
            counts into big opportunities, booking meetings and closing deals with
            just a few hundred views.
          </p>
          <Button className={"gradient-btn work-with-us-btn"}>
            Work with us
          </Button>
        </aside>
        <aside className="case-study-details flex" direction="col">
          {caseStudies.map((study, index) => (
            <article className="case-study flex" direction="col" key={index}>
              <h2>{study.title}</h2>
              <YoutubeVideo className="article-format-video" videoURL={study.youtube_url} />
              <p>{study.description}</p>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default CaseStudies;
