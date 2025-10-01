import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      " Amazing service from start to finish, friendly staff and really helpful. I dropped my car off this morning for window tinting, all was done within 1 hour 30 mins, super fast. My car now looks 100% better well made up. Thanks so much. Definitely recommend. ",
    author: "Kealey See",
  },
  {
    quote:
      "I recently had my car windows tinted by King of Tints, and I couldn’t be happier with the results! The tint looks sleek and professional — exactly what I wanted. ",
    author: "Shamim Miah",
  },
  {
    quote: " I had an amazing experience with King of Tints! They did a phenomenal job wrapping my vehicle, tinting my windows, and even working on my alloy wheels.",
    author: "Sams Angels",
  },

];

const ScrollingTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-overlay py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white text-black dark:bg-black dark:text-white p-6 rounded shadow-md"
          >
            {/* Quote */}
            <p className="text-sm mb-4">"{t.quote}"</p>

            {/* Author */}
            <p className="font-bold text-sm uppercase">
              {t.author}
            </p>

            {/* Source */}
            <p className="text-xs">Google Reviews</p>
          </div>
        ))}
      </div>

      {/* Scrolling Animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
