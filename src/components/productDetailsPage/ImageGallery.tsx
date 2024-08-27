"use client";
import React, { useState } from "react";
import Image from "next/image";

export const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="flex">
      {/* Thumbnails */}
      <div className="flex flex-col space-y-4 mr-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-20 h-20 relative cursor-pointer ${
              selectedImage === image ? "border-2 border-[#B88E2F]" : "border"
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill" // Ensure the image fills the container
              objectFit="cover" // Maintain the aspect ratio
              className="rounded" // Add any additional styling
            />
          </div>
        ))}
      </div>

      {/* Primary Image */}
      <div className="flex-1 h-[464px] relative">
        <Image
          src={selectedImage}
          alt="Selected"
          layout="fill" // Ensure the image fills the container
          objectFit="cover" // Maintain the aspect ratio
          className="rounded" // Add any additional styling
        />
      </div>
      

      
    </div>
  );
};
