import { useState, useEffect } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

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
      {/* Title */}
      <div className="text-center mb-8">
        {/* <h1 className="text-5xl font-serif font-bold mb-2 tracking-wide animate-bounce-in">
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
        </h1> */}

<h1 className={`text-3xl font-serif font-bold`}>
            <span className="text-teal-800">Valarmathi</span>{' '}
          </h1>
        <h2
          className="text-3xl font-serif font-bold animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-teal-600">Oil</span>
          <span className="text-salmon-500">Store</span>
        </h2>
      </div>

      {/* Oil Bottle */}
      {/* <div className="relative mb-6">
        <div className="w-14 h-28 bg-yellow-100 border-4 border-yellow-600 rounded-br-full rounded-bl-full rotate-[25deg] origin-bottom-left shadow-inner"></div>
        <div className="absolute top-0 left-1/2 w-3 h-6 bg-yellow-800 rounded-sm -translate-x-1/2 -translate-y-2 shadow-md" />
      </div> */}

      {/* Pouring Oil */}
      {/* <div className="relative h-32 flex justify-center items-start mb-2">
        <div className="w-1 h-10 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200 animate-pour rounded-full shadow-sm"></div>
      </div> */}

      {/* Bowl */}
      <div className="relative w-48 h-16">
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-300 rounded-b-full shadow-inner" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-yellow-300 rounded-full opacity-80 blur-sm animate-fill" />
      </div>

      {/* Progress Bar */}
      {/* <div className="w-64 h-2 mt-6 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-600 via-salmon-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div> */}

      {/* Message */}
      <div className="mt-3 text-sm text-muted-foreground animate-pulse">
        Loading premium oils...
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pour {
          0%, 100% { height: 0%; opacity: 0; }
          30% { height: 100%; opacity: 1; }
          70% { height: 100%; opacity: 1; }
        }
        .animate-pour {
          animation: pour 2.5s ease-in-out infinite;
          height: 8rem;
        }

        @keyframes fill {
          0% { width: 0%; opacity: 0.2; }
          100% { width: 10rem; opacity: 0.8; }
        }
        .animate-fill {
          animation: fill 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;


// import { useEffect, useState } from "react";

// const Loader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isLoading) return null;

//   return (
//     <div className="fixed inset-0 bg-cream-50 flex flex-col items-center justify-center z-50">
//       <div className="relative h-32">
//         <div className="absolute top-0 left-1/2 w-1 h-10 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200 animate-pour transform -translate-x-1/2 rounded-full shadow-sm"></div>
//       </div>

//       {/* Bowl */}
//       <div className="relative w-48 h-16 mt-2">
//         <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-300 rounded-b-full shadow-inner" />
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-yellow-300 rounded-full opacity-80 blur-sm animate-fill" />
//       </div>

//       <p className="mt-6 text-muted-foreground text-sm animate-pulse">
//         Pouring freshness...
//       </p>

//       {/* Animations */}
//       <style>{`
//         @keyframes pour {
//           0%, 100% { height: 0%; opacity: 0; }
//           30% { height: 100%; opacity: 1; }
//           70% { height: 100%; opacity: 1; }
//         }
//         .animate-pour {
//           animation: pour 2.5s ease-in-out infinite;
//         }

//         @keyframes fill {
//           0% { width: 0%; opacity: 0.2; }
//           100% { width: 10rem; opacity: 0.8; }
//         }
//         .animate-fill {
//           animation: fill 3s ease-in-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;
