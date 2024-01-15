import React from 'react';

function Man({ wrong }) {
  const hangmanParts = [
    // Single Base
    <line key="base" x1="15" y1="175" x2="135" y2="175" stroke="white" strokeWidth="2" />,
  
    // Vertical Pole
    <line key="vertical-pole" x1="75" y1="175" x2="75" y2="20" stroke="white" strokeWidth="2" />,
  
    // Horizontal Pole (Where rope is attached)
    <line key="horizontal-pole" x1="75" y1="20" x2="115" y2="20" stroke="white" strokeWidth="2" />,
  
    // Rope (Attached to the horizontal pole)
    <line key="rope" x1="115" y1="20" x2="115" y2="45" stroke="white" strokeWidth="2" />,
  
    // Head with outline only
    <circle key="head" cx="115" cy="55" r="10" stroke="white" fill="transparent" strokeWidth="2" />,
  
    // Body
    <line key="body" x1="115" y1="65" x2="115" y2="110" stroke="white" strokeWidth="2" />,
  
    // Left Arm
    <line key="left-arm" x1="115" y1="70" x2="100" y2="110" stroke="white" strokeWidth="2" />,
  
    // Right Arm
    <line key="right-arm" x1="115" y1="70" x2="130" y2="110" stroke="white" strokeWidth="2" />,
  
    // Left Leg
    <line key="left-leg" x1="115" y1="110" x2="100" y2="150" stroke="white" strokeWidth="2" />,
  
    // Right Leg
    <line key="right-leg" x1="115" y1="110" x2="130" y2="150" stroke="white" strokeWidth="2" />,
  ];

  return (
    <div>
      <svg width="150" height="200">
        {hangmanParts.slice(0, wrong)}
      </svg>
    </div>
  );
}

export default Man;
