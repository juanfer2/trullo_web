import React from 'react';
// import Image from '@assets/images/nature-image.jpg';
import { Button } from 'antd';
import { LockFilled, UnlockFilled, FileImageFilled, CloseOutlined } from '@ant-design/icons';
import { useBoardForm } from './use_board_form';

function BoardForm() {
  const {
    onSubmit,
    handleSubmit,
    errors,
    register,
    inputRef,
    onFileChange,
    changeIsPrivate,
    isPrivate,
    clearImage,
    imageState: { imageUrl, loadingImage }
  }: {
    onSubmit: any;
    handleSubmit: any;
    errors: any;
    register: any;
    getValues: any;
    setImageUrl: any;
    inputRef: any;
    onFileChange: any;
    changeIsPrivate: any;
    isPrivate: any;
    clearImage: Function;
    imageState: any;
  } = useBoardForm();

  return (
    <div className="board-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {loadingImage && <p>...Loading</p>}
        {imageUrl && (
          <div className="container-img">
            <div className="container-image">
              <img className="image" src={imageUrl} alt="form" />
            </div>
            <div className="delete-photo">
              <Button type="primary" onClick={() => clearImage()}>
                <CloseOutlined />
              </Button>
            </div>
          </div>
        )}

        <div className="container-input">
          <input className="input-name" {...register('title')} placeholder="Add board title" />
          {errors.title && <span className="error-message">This is required</span>}
        </div>

        <div className="container-status">
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

          <Button
            className={
              isPrivate
                ? 'status-cover status-visibility--active'
                : 'status-cover status-visibility'
            }
            onClick={() => changeIsPrivate()}
          >
            {isPrivate ? <LockFilled /> : <UnlockFilled />}
            <span> private</span>
          </Button>
        </div>

        <div className="footer-actions">
          <Button type="default">Cancel</Button>

          <Button type="primary" htmlType="submit">
            + Create
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BoardForm;
