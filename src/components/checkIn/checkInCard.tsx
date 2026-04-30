import React from 'react';

interface CheckInCardProps {
  airlineName: string;
  imageSrc: string;
  checkInUrl: string;
}

export const CheckInCard: React.FC<CheckInCardProps> = ({ airlineName, imageSrc, checkInUrl }) => {
  return (
    <a 
      href={checkInUrl}
      className="block w-full overflow-hidden bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-200"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img 
        src={imageSrc} 
        alt={`Check In ${airlineName}`} 
        className="w-full h-auto object-cover block"
        loading="lazy"
      />
    </a>
  );
};