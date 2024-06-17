import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/' },
  ];

  return (
    <footer className="footer bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center space-x-4"> 
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <link.icon size={24} /> 
          </a>
        ))}
      </div>
      <div className="container mx-auto text-center mt-2"> 
        <p>&copy; 2024 Thabo Likotsi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
