// NightSkyBackground.jsx
import React, { useEffect } from 'react';


const NightSkyBackground = () => {
  useEffect(() => {
    const background = document.querySelector('.weather-background');
    const starCount = 50;

    // Clean up existing stars if any
    const existingStars = background.querySelectorAll('.stars');
    existingStars.forEach(star => star.remove());

    // Generate stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const moveX = (Math.random() - 0.5) * 60;
      const moveY = (Math.random() - 0.5) * 60;

      star.className = `stars star${Math.floor(Math.random() * 3) + 1}`;
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        --move-x: ${moveX}px;
        --move-y: ${moveY}px;
        animation-duration: ${Math.random() * 2 + 1}s;
      `;

      background.appendChild(star);
    }

    // Cleanup function
    return () => {
      const stars = background.querySelectorAll('.stars');
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div className="weather-background">
      <div className="moon"></div>
    </div>
  );
};

export default NightSkyBackground;