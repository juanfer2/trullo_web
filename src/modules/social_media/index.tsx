import React from 'react';
import GoogleIcon from '@assets/images/google.svg';
import GithubIcon from '@assets/images/gihub.svg';
import TwitterIcon from '@assets/images/twitter.svg';
import FacebookIcon from '@assets/images/facebook.svg';

interface IconSocialMediaInterface {
  imageUrl: string;
  name: string;
}
const IconsSocialMedia: IconSocialMediaInterface[] = [
  { imageUrl: GoogleIcon, name: 'google' },
  { imageUrl: FacebookIcon, name: 'facebook' },
  { imageUrl: TwitterIcon, name: 'twitter' },
  { imageUrl: GithubIcon, name: 'gihub' }
];

function SocialMedial() {
  return (
    <div className="social-media">
      <span className="text">or continue with these social profile</span>
      <div className="icons-social">
        {IconsSocialMedia &&
          IconsSocialMedia.map((itemIcon: IconSocialMediaInterface) => (
            <div className="icon">
              <img key={itemIcon.name} src={itemIcon.imageUrl} alt={itemIcon.name} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SocialMedial;
