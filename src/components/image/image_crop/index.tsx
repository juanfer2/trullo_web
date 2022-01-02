import React from 'react'

interface ImageCropInterface {
  imageUrl: string;
}

function ImageCrob({imageUrl}: ImageCropInterface) {
  return (
    <div className="image-crop">
      <img className="image" src={imageUrl} alt="form" />
    </div>
  )
}

export default ImageCrob
