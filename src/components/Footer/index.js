import React from 'react';

const Footer = ({ isDarkTheme }) => {
  const footerClasses = `text-center py-4 ${
    isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'
  }`;

  return (
    <footer className={footerClasses}>
      <p className="text-sm">&copy; 2023 Portfolio-Yadhnesh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
