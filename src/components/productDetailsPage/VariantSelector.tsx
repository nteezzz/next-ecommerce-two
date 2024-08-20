import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; 

interface VariantSelectorProps {
  variants: string[];
  onVariantChange?: (variant: string) => void;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({ variants, onVariantChange }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleClick = (variant: string) => {
    setSelectedVariant(variant);
    if (onVariantChange) {
      onVariantChange(variant);
    }
  };

  return (
    <div className="mt-4">
      <label className="text-sm text-gray-600 mb-2 block">Variants:</label>
      <div className="flex space-x-2">
        {variants.map((variant, index) => (
          <Button
            key={index}
            variant={selectedVariant === variant ?  'default':'ghost'}
            onClick={() => handleClick(variant)}
            className={`${selectedVariant === variant ?  'bg-[#B88E2F] hover:bg-[#B88E2F]':'bg-[#F9F1E7] hover:bg-[#F9F1E7]'}`}
          >
            {variant}
          </Button>
        ))}
      </div>
    </div>
  );
};
