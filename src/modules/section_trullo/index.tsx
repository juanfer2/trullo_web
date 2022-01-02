import React from 'react';
import Logo from '@assets/images/Logo.svg';

function SectionTrullo() {
  return (
    <div className="section-trullo">
      <div className="container-logo">
        <img src={Logo} alt="trullo-logo" />
      </div>
      <h3>Join thousands of learners from around the world </h3>

      <p>
        Master web development by making real-life projects. There are multiple paths for you to
        choose
      </p>
    </div>
  );
}

export default SectionTrullo;
