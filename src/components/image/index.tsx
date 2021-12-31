import React from 'react'
import { ImageStyle, ImageSizes } from '@components/image/image_styled'

interface ImageInterface {
  imageUrl: string;
  type: string;
}

function Image({imageUrl, type='default'}: ImageInterface) {
  
  return (
    <ImageStyle 
      width={ImageSizes[type].width || 'auto'}
      height={ImageSizes[type].height || 'auto'}
      border={ImageSizes[type].border || '0px'}>
      <img src={imageUrl} alt="container" />
    </ImageStyle>
  )
}

export default Image
