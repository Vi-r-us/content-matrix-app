import FeaturedTestimonials from "./Components/FeaturedTestimonials";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Partners from "./Components/Partners";
import Testimonials from "./Components/Testimonials";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="page-content flex" direction="col">
        <Hero />
        <Partners />
        <FeaturedTestimonials />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
