import FeaturedTestimonials from "./Components/FeaturedTestimonials";
import Hero from "./Components/Hero";
import LongVideoExamples from "./Components/LongVideoExamples";
import Navbar from "./Components/Navbar";
import Partners from "./Components/Partners";
import ShortVideoExamples from "./Components/ShortVideoExamples";
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
        <LongVideoExamples />
        <ShortVideoExamples />
      </main>
    </>
  );
}

export default App;
