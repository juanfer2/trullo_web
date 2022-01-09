import React from 'react';
import Loading from '@components/loading';
import { useImageCrop } from '@components/image/image_crop/use_image_crop';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

interface ImageCropInterface {
  imageUrl: string;
  onClose?: any;
}

function ImageCrob({ imageUrl, onClose }: ImageCropInterface) {
  const { loading, ref, onLoad } = useImageCrop();

  return (
    <div className="image-crop-container">
      <div className="image-crop">
        {loading && <Loading />}

        <img src={imageUrl} className="image" ref={ref} onLoad={onLoad} alt="form" />
      </div>

      {onClose && (
        <div className="delete-photo">
          <Button type="primary" onClick={onClose || (() => {})}>
            <CloseOutlined />
          </Button>
        </div>
      )}
    </div>
  );
}

ImageCrob.defaultProps = {
  onClose: null
};

export default ImageCrob;
