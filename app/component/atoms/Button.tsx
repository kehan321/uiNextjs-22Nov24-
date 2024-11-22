import React, { useState } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isClicked: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, isClicked }) => {
  return (
    <button
      className={`p-2 rounded-full px-4 py-2 text-white transition-all ${
        isClicked
          ? 'bg-white text-gray-500' // Button clicked, color changes to white with blue text
          : 'text-gray-500'  // Default color
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
