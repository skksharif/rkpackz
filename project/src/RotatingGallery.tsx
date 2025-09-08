import React, { useState, useEffect } from "react";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
];

const RotatingGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6">Our Sample Works</h2>

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Gallery"
          className="w-full h-auto transition-transform duration-700 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-4 mt-4">
        {images.slice(1).map((img, idx) => (
          <button
            key={idx}
            onClick={() => handleThumbnailClick(idx + 1)}
            className={`border-2 rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${
              currentIndex === idx + 1 ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-auto" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RotatingGallery;
