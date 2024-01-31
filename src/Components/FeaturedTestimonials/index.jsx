import { featuredTestimonials } from "../../data";
import "./featuredTestimonials.css";

const FeaturedTestimonials = () => {
  return (
    <section className="featured-testimonials-section flex" direction="col">
      <h2>We ACTUALLY Get Results</h2>
      <ul className="image-case-studies">
        {featuredTestimonials.map((testimonial, index) => {
          const { name, image, company } = testimonial;
          return (
            <li className="image-case-study flex" direction="col" key={index}>
              <h3>
                {name} <br /> {`👇 @ ${company} 👇`}
              </h3>
              <img src={image} alt={name} loading="lazy" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FeaturedTestimonials;
