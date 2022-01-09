import React from 'react';
import { Button } from 'antd';
import { FileImageFilled, CloseOutlined } from '@ant-design/icons';
import Loading from '@components/loading';
import ImageCrob from '@components/image/image_crop';
import { useUploadImage } from './use_upload_image';

function UploadImage() {
  const {
    onFileChange,
    imageState: { imageUrl, loadingImage },
    inputRef,
    clearImage
  } = useUploadImage();

  return (
    <div className="upload-file">
      {loadingImage && <Loading />}
      {imageUrl && (
        <div className="container-img">
          <ImageCrob imageUrl={imageUrl} />
          <div className="delete-photo">
            <Button type="primary" onClick={() => clearImage()}>
              <CloseOutlined />
            </Button>
          </div>
        </div>
      )}
      <Button
        onClick={() => inputRef.current.click()}
        className={imageUrl ? 'status-cover status-cover--active' : 'status-cover status-cover'}
      >
        <FileImageFilled />
        <span>cover</span>

        <input
          type="file"
          name="image"
          ref={inputRef}
          onChange={(e) => onFileChange(e)}
          className="d-none"
        />
      </Button>
    </div>
  );
}

export default UploadImage;
