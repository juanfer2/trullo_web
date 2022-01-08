import React from 'react'
import Loading from '@components/loading';
import { useImageCrop } from '@components/image/image_crop/use_image_crop';
// import { CameraFilled } from '@ant-design/icons';

interface ImageCropInterface {
  imageUrl: string;
}

function ImageCrob({imageUrl}: ImageCropInterface) {
  const {loading, ref, onLoad} = useImageCrop()

  return (
    <div className="image-crop">
      {loading && <Loading/>}

      <img src={imageUrl} 
        className="image" 
        ref={ref} 
        onLoad={onLoad} 
        alt="form"/>
    </div>
  )
}

export default ImageCrob
