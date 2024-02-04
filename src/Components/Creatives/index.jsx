import { creativeText } from "../../data";
import "./creatives.css";

const Creatives = () => {
  return (
    <section className="creatives-section flex" direction="col">
      <h2>
        {creativeText.title} <span>{creativeText.highlighted}</span>
      </h2>
      <p>{creativeText.description}</p>
      <img
        src={creativeText.image}
        loading="lazy"
        alt={creativeText.title}
      ></img>
    </section>
  );
};

export default Creatives;
