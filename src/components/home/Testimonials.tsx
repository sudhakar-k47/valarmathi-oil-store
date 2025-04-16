
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been using Valarmathi's coconut oil for cooking and skin care for over a year now. The difference in quality compared to store-bought oils is remarkable!",
    author: "Priya Sharma",
    location: "Chennai"
  },
  {
    id: 2,
    text: "The sesame oil from Valarmathi has such an authentic aroma and flavor. It reminds me of the traditional oils my grandmother used to get from her village.",
    author: "Rajesh Kumar",
    location: "Bangalore"
  },
  {
    id: 3,
    text: "I switched to their cold-pressed oils after my doctor recommended reducing refined oils in my diet. My cholesterol levels have improved significantly.",
    author: "Anita Desai",
    location: "Mumbai"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-16 bg-olive-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-olive-900">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the people who have made Valarmathi oils a part of their daily lives.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md relative">
                    <Quote className="absolute top-4 left-4 h-10 w-10 text-olive-200 opacity-50" />
                    <blockquote className="text-lg text-foreground mb-6 pt-8 px-4 relative z-10">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-terracotta-100 flex items-center justify-center text-terracotta-500 font-serif font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-olive-800">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-cream-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-olive-700" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-cream-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-olive-700" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-6 bg-olive-600' : 'bg-olive-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
