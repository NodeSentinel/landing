"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Senior DevOps Engineer",
    company: "Crypto Infrastructure Labs",
    image: "/images/testimonials/alex-chen.jpg",
    text: "Node Sentinel has revolutionized how we monitor our validator fleet. The real-time alerts and detailed analytics have helped us maintain 99.9% uptime across all our nodes.",
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "Blockchain Operations Manager",
    company: "Staking Solutions Inc.",
    image: "/images/testimonials/sarah-rodriguez.jpg",
    text: "The dashboard is incredibly intuitive and the Telegram notifications are a game-changer. We've reduced our response time to validator issues by 80% since implementing Node Sentinel.",
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "Infrastructure Lead",
    company: "DeFi Protocol Foundation",
    image: "/images/testimonials/michael-thompson.jpg",
    text: "As someone managing hundreds of validators, Node Sentinel's comprehensive monitoring has been essential. The performance tracking and alerting system is exactly what we needed.",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Technical Operations Director",
    company: "Blockchain Security Corp",
    image: "/images/testimonials/emma-wilson.jpg",
    text: "The level of detail in the analytics and the reliability of the monitoring system is outstanding. Node Sentinel has become an integral part of our validator management strategy.",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Systems Architect",
    company: "Blockchain Infrastructure Co.",
    image: "/images/testimonials/david-kim.jpg",
    text: "The monitoring capabilities are exceptional. We've seen a significant improvement in our validator performance since implementing Node Sentinel.",
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Operations Manager",
    company: "Staking Services Ltd.",
    image: "/images/testimonials/lisa-park.jpg",
    text: "Simple yet powerful. The real-time notifications have saved us countless hours of manual monitoring.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-32 relative">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/20 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          {/*  <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Testimonials
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"></div>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by validator operators worldwide for reliable monitoring
            solutions.
          </p>
        </div>

        {/* Enhanced Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container with enhanced styling */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-8"
                >
                  <div className="h-full bg-gradient-to-br from-background to-muted/30 border border-primary/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                    {/* Quote icon */}
                    {/* <div className="mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/30">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div> */}

                    {/* Testimonial Content */}
                    <div className="mb-8">
                      <p className="text-muted-foreground leading-relaxed text-lg italic">
                        &quot;{testimonial.text}&quot;
                      </p>
                    </div>

                    {/* Enhanced Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg">
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-primary text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-base">
                          {testimonial.role}
                        </p>
                        <p className="text-muted-foreground/80 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from(
              { length: Math.ceil(testimonials.length / 3) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * 3)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === index
                      ? "bg-primary scale-125 shadow-lg"
                      : "bg-primary/30 hover:bg-primary/50 hover:scale-110"
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
