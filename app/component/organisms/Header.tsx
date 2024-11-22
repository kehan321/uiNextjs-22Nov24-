import React, { useState } from 'react';
import Button from '../atoms/Button';

const Header: React.FC = () => {
  // State to track the clicked button
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  // Handler for button clicks
  const handleButtonClick = (label: string) => {
    setClickedButton(label); // Set the clicked button's label to maintain the clicked state
    // alert(`${label} Clicked`);
  };

  return (
    <header className="bg-gradient-to-r from-orange-400 p-4">
      <div className="container  flex flex-row space-x-4 py-3 w-[50%] sm:w-auto justify-evenly rounded-full bg-white bg-opacity-40 text-gray-500 color mx-auto">
        {/* Pass the appropriate label to each button and the clicked state */}
        <Button 
          label="Home" 
          onClick={() => handleButtonClick('Home')} 
          isClicked={clickedButton === 'Home'} 
        />
        <Button 
          label="Work" 
          onClick={() => handleButtonClick('Work')} 
          isClicked={clickedButton === 'Work'} 
        />
        <Button 
          label="About" 
          onClick={() => handleButtonClick('About')} 
          isClicked={clickedButton === 'About'} 
        />
        <Button 
          label="Contact" 
          onClick={() => handleButtonClick('Contact')} 
          isClicked={clickedButton === 'Contact'} 
        />
      </div>
    </header>
  );
};

export default Header;
