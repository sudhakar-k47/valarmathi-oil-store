
import { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Handle loader disappearing after content loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-cream-50 flex flex-col items-center justify-center z-50">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-serif font-bold mb-2 tracking-wide animate-bounce-in">
          <span className="text-teal-600">V</span>
          <span className="text-salmon-500">a</span>
          <span className="text-blue-600">l</span>
          <span className="text-teal-600">a</span>
          <span className="text-salmon-500">r</span>
          <span className="text-cream-500">m</span>
          <span className="text-blue-600">a</span>
          <span className="text-teal-600">t</span>
          <span className="text-salmon-500">h</span>
          <span className="text-blue-600">i</span>
        </h1>
        <h2 className="text-3xl font-serif font-bold animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <span className="text-teal-600">Oil</span> 
          <span className="text-salmon-500">Store</span>
        </h2>
      </div>
      
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-600 via-salmon-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="mt-3 text-sm text-muted-foreground animate-pulse">
        Loading premium oils...
      </div>
    </div>
  );
};

export default Loader;
