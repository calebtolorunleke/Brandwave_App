import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Hero = ({BackgroundSlides}) => {
  const [backgroundImgIndex, setbackgroundImgIndex] = useState(0);
 
  useEffect(() => {
    if (!BackgroundSlides || BackgroundSlides.length === 0) return;

    const slideInterval = setInterval(() => {
      setbackgroundImgIndex((slide) => (slide + 1) % BackgroundSlides.length);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [BackgroundSlides]);

  return (
    <section className='hero_container'>
      {BackgroundSlides.map((image, index) => (
        <div
          key={index}
          className={`hero_section ${index === backgroundImgIndex ? 'active' : index === (backgroundImgIndex - 1 + BackgroundSlides.length) % BackgroundSlides.length
            ? 'left' : ""}`}

          style={{backgroundImage: `url(${image.src})`}}
        >
          <h1 className='hero_text'>{ image.text}</h1>
        </div>
      ))}

      <Header />

      <Link to={'/Register'} className='register_btn'>Get Started</Link>
    </section>
    
  )
}

export default Hero;
