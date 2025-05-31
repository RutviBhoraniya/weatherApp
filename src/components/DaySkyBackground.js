// DaySkyBackground.jsx
import React, { useEffect } from 'react';


const DaySkyBackground = () => {
  useEffect(() => {
    const background = document.querySelector('.day-background');
    const cloudCount = 15;

    // Clean up existing clouds if any
    const existingClouds = background.querySelectorAll('.cloud');
    existingClouds.forEach(cloud => cloud.remove());

    // Generate clouds
    for (let i = 0; i < cloudCount; i++) {
      const cloud = document.createElement('div');
      const size = Math.random() * 100 + 50; // Clouds between 50-150px
      const speed = Math.random() * 20 + 10; // Animation duration 10-30s

      cloud.className = `cloud cloud${Math.floor(Math.random() * 3) + 1}`;
      cloud.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 60}%; // Keep clouds in upper 60% of screen
        width: ${size}px;
        height: ${size / 2}px;
        animation-duration: ${speed}s;
        opacity: ${Math.random() * 0.5 + 0.3}; // 0.3-0.8 opacity
      `;

      background.appendChild(cloud);
    }

    // Cleanup function
    return () => {
      const clouds = background.querySelectorAll('.cloud');
      clouds.forEach(cloud => cloud.remove());
    };
  }, []);

  return (
    <div className="day-background">
      <div className="sun"></div>
    </div>
  );
};

export default DaySkyBackground;