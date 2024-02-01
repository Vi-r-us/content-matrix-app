import { Button } from "../UtilityComponents";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section flex" direction="col">
      <h2>
        What <span>our clients</span> have to say
      </h2>
      <Button className="gradient-btn" href="book-a-call">
        book a call
      </Button>
    </section>
  );
};

export default Testimonials;
