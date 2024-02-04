import { useRef, useState } from "react";
import { testimonials } from "../../data";
import { Button } from "../UtilityComponents";
import "./testimonials.css";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const handleLeftClick = () => {
    setCurrentIndex((currentIndex - 1) % testimonials.length);
    carousel.current.style.transform = `translateX(calc((-${
      currentIndex % testimonials.length
    } * (100% - 1em))))`;
  };
  const handleRightClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
    carousel.current.style.transform = `translateX(calc((-${
      currentIndex % testimonials.length
    } * (100% - 1em))))`;
  };

  return (
    <section className="testimonials-section flex" direction="col">
      <h2>
        What <span>our clients</span> have to say
      </h2>

      <div className="testimonials-slider" direction="row">
        <HiOutlineChevronLeft
          className="arrow-left"
          onClick={() => handleLeftClick()}
        />
        <ul
          className="testimonials-carousel flex"
          direction="row"
          ref={carousel}
        >
          {testimonials.map((testimonial, index) => (
            <li className="testimonial" key={index}>
              <img src={testimonial} loading="lazy" />
            </li>
          ))}
        </ul>
        <HiOutlineChevronRight
          className="arrow-right"
          onClick={() => handleRightClick()}
        />
      </div>
      <Button className="gradient-btn" href="book-a-call">
        book a call
      </Button>
    </section>
  );
};

export default Testimonials;
