
import React from "react";

interface LightningBoltIconProps {
  className?: string;
}

export const LightningBoltIcon: React.FC<LightningBoltIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M13 2L4.8 12.4c-.6.8-.1 1.8.7 2.2.2.1.5.2.8.2H12l-1 7 8.2-10.5c.6-.8.1-1.8-.7-2.2-.2-.1-.5-.2-.8-.2H12l1-7z" />
      <path d="M12 11.5V4" opacity="0.5" />
      <path d="M8.5 12H15" opacity="0.5" />
    </svg>
  );
};
