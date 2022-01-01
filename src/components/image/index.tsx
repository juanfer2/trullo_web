import React from 'react';
import { ImageStyle, ImageSizes } from '@components/image/image_styled';

export interface ImageInterface {
  imageUrl: string;
  type: string;
  name: string;
}

function Image({ imageUrl, type = 'default', name }: ImageInterface) {
  return (
    <ImageStyle
      width={ImageSizes[type].width || 'auto'}
      height={ImageSizes[type].height || 'auto'}
      border={ImageSizes[type].border || '0px'}
    >
      <img src={imageUrl} alt={name} />
    </ImageStyle>
  );
}

export default Image;
