// components/Carousel.jsx
import React, { useState, useEffect } from "react";

const slides = [
  { 
    id: 1,
    image: "/images/video-production-01.png",
    title: "Video Production",
    description: "Tell Your Story Through Compelling Visuals",
  }, 
  {
    id: 2,
    image: "/images/sms-01.png",
    title: "Social Media Setup",
    description: "Grow your brand’s presence with smart social strategies.",
  },
  {
    id: 3,
    image: "/images/smm-01.png",
    title: "Social Media Management",
    description: "Consistent, Creative & Growth-Oriented",
  },
  {
    id: 4,
    image: "/images/blp-01.png",
    title: "Brand Launch Packages",
    description: "Launch with Confidence and Transparency",
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-8xl mx-auto mt-0">
      <div className="relative overflow-hidden rounded-sm shadow-lg">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="h-full w-[auto] object-cover"/>

        <div className="absolute bottom-0 left-0 right-0 py-6 px-4 bg-black/50 text-white">
          <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
