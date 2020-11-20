import React from "react";
import { createArray } from "./lib";
import Star from "./Star";

export default function StarRating({
  className = "",
  totalStars = 5,
  selectedStars = 0,
  onRate
}) 
{
  return (
    <div className={className}>
      <div>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>
      <p>
        {selectedStars} 星 (满分{totalStars}星)
      </p>
    </div>
  );
}
