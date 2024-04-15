import React from 'react';
import instagramIcon from './assets/icon-insta.svg';
import facebookIcon from './assets/icon-face.svg';
import twitterIcon from './assets/icon-x.svg';
import './SocialMediaIcons.css';


const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="Twitter" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
