'use client';

import React, { useState } from 'react';

const reviews = [
  {
    img: 'https://randomuser.me/api/portraits/men/10.jpg',
    name: 'James Miller',
    role: 'Software Engineer',
    stars: 5,
    quote: 'Morimura Din delivered a seamless, scalable web app with flawless code quality and modern UI/UX. His expertise in React, Next.js, and API integration is outstanding. Highly recommended for any technical project.'
  },
  {
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Sarah Johnson',
    role: 'Project Manager',
    stars: 5,
    quote: 'Exceptional communication and technical depth. Morimura Din architected our cloud solution with best practices, optimized performance, and robust security. The project exceeded all expectations.'
  },
  {
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Michael Lee',
    role: 'CTO, TechCorp',
    stars: 5,
    quote: 'A true full-stack expert! From advanced TypeScript patterns to CI/CD automation, Morimura Din brought innovation and reliability to our platform. The collaboration was smooth and results-driven.'
  },
  {
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    name: 'Emily Davis',
    role: 'Lead Designer',
    stars: 5,
    quote: 'Morimura Din has a rare blend of technical and creative skills. The UI/UX he delivered was pixel-perfect, and his attention to detail made our product stand out.'
  }
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const handleDotClick = (idx: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrent(idx);
      setFade(false);
    }, 200);
  };

  return (
    <section id="review" className="w-full flex flex-col items-center justify-center py-16 mt-8 relative overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0 w-full h-full bg-[#030014] -z-30" />
      {/* Cosmic gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#a259ff33] via-[#6a82fb22] to-[#030014] opacity-60 -z-20 pointer-events-none" />
      {/* Content */}
      <div className="flex flex-col items-center justify-center max-w-xl w-full mx-auto transition-all duration-300 relative z-10">
        <div className={`flex flex-col items-center w-full transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <img src={reviews[current].img} alt={reviews[current].name} className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-6" />
          <h3 className="text-2xl font-bold text-white mb-1">{reviews[current].name}</h3>
          <div className="text-cyan-200 mb-2 font-medium">{reviews[current].role}</div>
          <div className="flex mb-4">
            {Array.from({length: 5}).map((_, i) => <span key={i} className="text-yellow-400 text-2xl">★</span>)}
          </div>
          <blockquote className="text-white text-lg italic mb-8 text-center px-4">“{reviews[current].quote}”</blockquote>
        </div>
        {/* Carousel Dots */}
        <div className="flex gap-3 justify-center mt-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-200 border-2 ${current === idx ? 'bg-white border-cyan-400 opacity-90 scale-125' : 'bg-white opacity-30 border-transparent'}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 