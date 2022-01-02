import React from 'react';
import { Button } from 'antd';
import SectionTrullo from '@modules/section_trullo';
import SocialMedial from '@modules/social_media';

function Register() {
  return (
    <div className="register">
      <div className="container-register">
        <SectionTrullo />

        <form>
          <input placeholder="email" />
          <input placeholder="password" type="password" />

          <Button htmlType="submit" type="primary">
            Start now
          </Button>
        </form>

        <SocialMedial />
      </div>
    </div>
  );
}

export default Register;
