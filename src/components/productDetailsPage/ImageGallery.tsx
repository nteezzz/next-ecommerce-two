"use client";
import React, { useState } from "react";

export const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="flex">
      {/* Thumbnails */}
      <div className="flex flex-col space-y-4 mr-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={`w-20 h-20 object-cover cursor-pointer ${
              selectedImage === image ? "border-2 border-[#B88E2F]" : "border"
            }`}
          />
        ))}
      </div>

      {/* Primary Image */}
      <div className="flex-1 h-[464px] relative">
        <img
          src={selectedImage}
          alt="Selected"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};
