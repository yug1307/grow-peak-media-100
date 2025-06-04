// components/Carousel.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/assets/react.svg",
    title: "Creative Video Production",
    description: "Engaging videos to showcase your brand’s story.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/800x400.png?text=Slide+2",
    title: "Social Media Marketing",
    description: "Grow your brand’s presence with smart social strategies.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x400.png?text=Slide+3",
    title: "Drone & Aerial Videography",
    description: "Breathtaking visuals to elevate your content.",
  },
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

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <section className="max-w-6xl mx-auto mt-0 border-4 border-indigo-500">
      <div className="relative overflow-hidden rounded-sm shadow-lg">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-[400px] object-cover"/>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
          <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
                ></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
