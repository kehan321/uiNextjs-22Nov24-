import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://twitter.com"
            className="text-white hover:text-yellow-400 mx-4 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            className="text-white hover:text-yellow-400 mx-4 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-yellow-400 mx-4 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
