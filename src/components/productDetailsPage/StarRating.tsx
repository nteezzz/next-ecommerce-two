"use client";
import React from 'react';

interface StarRatingProps {
  rating: number;
  totalStars?: number; 
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const fillPercentage = Math.min(Math.max((rating - index) * 100, 0), 100);
        return (
          <div key={index} className="relative">
            <div className="absolute top-0 left-0 h-full" style={{ width: `${fillPercentage}%`, overflow: 'hidden' }}>
              <svg className="w-6 h-6 text-[#B88E2F] fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.521 8.332 1.151-6.064 5.828 1.48 8.275L12 18.896 4.584 23.362l1.48-8.275-6.064-5.828 8.332-1.151L12 .587z" />
              </svg>
            </div>
            <svg className="w-6 h-6 text-gray-300 fill-current" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.521 8.332 1.151-6.064 5.828 1.48 8.275L12 18.896 4.584 23.362l1.48-8.275-6.064-5.828 8.332-1.151L12 .587z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
