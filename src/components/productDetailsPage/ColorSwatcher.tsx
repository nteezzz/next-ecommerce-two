"use client";
import React, { useState, useEffect } from "react";

interface ColorSwatcherProps {
  colors: string[];
  onChange?: (color: string) => void;
}

export const ColorSwatcher: React.FC<ColorSwatcherProps> = ({
  colors,
  onChange,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    // Set the default selected color to the first color in the array
    if (colors.length > 0) {
      setSelectedColor(colors[0]);
      if (onChange) {
        onChange(colors[0]);
      }
    }
  }, [colors, onChange]);

  const handleClick = (color: string) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div className="mt-4">
      <label className="text-sm text-gray-600">Colors:</label>
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(color)}
            className={`w-6 h-6 rounded-full cursor-pointer ${
              selectedColor === color
                ? "border-2 border-[#B88E2F]"
                : "border border-gray-300"
            }`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};
