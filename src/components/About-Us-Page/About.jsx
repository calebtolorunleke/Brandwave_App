import Hero from "./Hero";
import Services from "./Services";
import Info from "./Info";
import Processes from "./Processes";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import Footer from "./Footer";

const AboutUs = () => {
  const backgroundImages = [
    {
      src: "/src/assets/Hero-background1.png",
      text: "Bring your brand to life—beautifully, effortlessly.",
    },

    {
      src: "/src/assets/Hero-background2.jpg",
      text: "Design less. Impress more.Let Brandwave do the work",
    },

    {
      src: "/src/assets/Hero-background3.jpg",
      text: "Elevate your story. Empower your brand. Engage the world",
    },
  ];

  return (
    <div>
      <Hero BackgroundSlides={backgroundImages} />
      <Services />
      <Info />
      <Processes />
      <Testimonials title="From Our Satisfied Clients" />
      <Clients />
      <Footer />
    </div>
  );
};

export default AboutUs;
