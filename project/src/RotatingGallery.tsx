import React, { useState, useEffect } from "react";

const images = [
  "/bags/2.PNG",
  "/bags/3.PNG",
  "/bags/9.PNG",
  "/bags/5.PNG",
  "/bags/10.PNG",
  "/bags/7.PNG",
  "/bags/8.PNG",
  "/bags/11.jpg",
  "/bags/12.jpg",
];

const RotatingGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
    
      <div className="w-full max-w-md md:max-w-3xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          {/* Main Image */}
          <div className="md:w-[700px] w-full h-[300px] md:h-[400px] rounded-lg shadow-md overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt="Gallery"
              className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex md:flex-col flex-row gap-2 overflow-hidden max-h-[400px] w-full md:w-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                className={`border rounded-lg overflow-hidden transition-transform transform ${
                  currentIndex === idx
                    ? "border-blue-500 scale-105"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-16 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RotatingGallery;
