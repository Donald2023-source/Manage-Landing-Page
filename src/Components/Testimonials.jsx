import React, { useState, useEffect } from 'react';
import Testimonial1 from './Testimonial1';
import Testimonial2 from './Testimonial2';
import Testimonial3 from './Testimonial3';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed

  const testimonials = [<Testimonial1 />, <Testimonial2 />, <Testimonial3 />];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (isSmallScreen) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Change the duration as needed (in milliseconds)
    }

    return () => clearInterval(interval);
  }, [isSmallScreen, testimonials.length]);

  return (
    <>
      <h1 className="font-bold text-center text-3xl py-4">What they've said</h1>
      {isSmallScreen ? (
        <div className="flex flex-col items-center gap-8 lg:flex lg:flex-row lg:items-stretch justify-between">
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
              {testimonial}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-between">
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ width: '30%' }}>
              {testimonial}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Testimonials;
