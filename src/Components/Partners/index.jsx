import { partnersLogos } from "../../data";
import "./partners.css";

const Partners = () => {
  return (
    <section className="partners-section flex" direction="col">
      <h2>Trusted By:</h2>

      <div className="clients-scroller">
        <ul className="clients-marquee flex" direction="row">
          {partnersLogos.map((partner, index) => (
            <li key={index}>
              <img src={partner.image} alt={partner.imageText} />
            </li>
          ))}

          {partnersLogos.map((partner, index) => (
            <li key={index}>
              <img src={partner.image} alt={partner.imageText} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
