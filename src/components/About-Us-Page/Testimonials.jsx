import { useState, useEffect } from "react";

const testimonials = [
      {
        image: "/src/assets/Testimonial1.jpg",
        testimonies: '“Brandwave made launching my portfolio a breeze. I went from scattered assets to a beautiful page in under 30 minutes!!” ',
        name: "SARAH ",
        profession: 'FREELANCE DESIGNER'
      },
      {
        image: "/src/assets/Testimonial2.jpg",
        testimonies: '“As a solo founder with no tech skills, Brandwave gave me the tools to build a legit brand presence - No stress, no code”',
        name: "BEN ",
        profession: ' ACCESSORIES MAKER'
      },
      {
        image: "/src/assets/Testimonial3.jpg",
        testimonies: '“The templates are stunning and super easy to customize. My brand has never looked more professional” ',
        name: "AISHA ",
        profession: 'BUSINESS OWNER'
      },
      {
        image: "/src/assets/Testimonial4.jpg",
        testimonies: '“I created 3 different showcases for my side hustles, and they all look amazing. Love the analytics too”',
        name: "CHINEDU ",
        profession: 'DIGITAL ARTIST'
      },
      {
        image: "/src/assets/Testimonial5.jpg",
        testimonies: '“I finally feel like i have a real brand. Brandwave gave me confidence and clarity without hiring a designer” ',
        name: "GRACE ",
        profession: 'LIFE COACH'
      },
]


const Testimonials = ({ title }) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex(index => (index + 1) % testimonials.length)
    }, 2000)

    return () => clearInterval(interval)
  }, []);
  
  return (
    <section className="testimonial_container">
      <h2>{title}</h2>
      <div className="testimonial_section">
        {testimonials.map((testimonial, index) => (
          <div className={`testimonial_card ${index === testimonialIndex ? 'active' : index === (testimonialIndex - 1 + testimonials.length) % testimonials.length
              ? 'left' :""}`} key={index}>
              <img src={testimonial.image} alt="Picture" />
              <p> {testimonial.testimonies} </p>
              <h3 className="testimonial_name"> {testimonial.name} </h3>
              <h3 > {testimonial.profession} </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;