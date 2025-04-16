
import React from 'react';
import { Leaf, Heart, Droplets, ThumbsUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Leaf className="h-12 w-12 text-olive-600" />,
      title: "100% Organic",
      description: "All our oils are extracted from organically grown sources, free from chemicals and pesticides."
    },
    {
      icon: <Heart className="h-12 w-12 text-terracotta-500" />,
      title: "Heart Healthy",
      description: "Our cold-pressed oils retain natural nutrients that promote cardiovascular health."
    },
    {
      icon: <Droplets className="h-12 w-12 text-olive-600" />,
      title: "Cold Pressed",
      description: "Traditional extraction methods preserve the nutrients, aroma, and authentic flavor."
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-terracotta-500" />,
      title: "Quality Assured",
      description: "Every batch undergoes strict quality checks to ensure the highest standards."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-olive-900">Why Choose Our Oils?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Valarmathi, we combine traditional wisdom with modern quality standards to bring you the best nature has to offer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg border border-muted bg-background hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-olive-800">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
