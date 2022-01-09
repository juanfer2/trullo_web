import React from 'react';
import { Button } from 'antd';

export interface CardAttachementInterface {
  type: string;
  imageUrl?: string;
}

function CardAttachement({ type, imageUrl }: CardAttachementInterface) {
  return (
    <div className="card-attachement">
      <div className="image-container">
        {type === 'image' && imageUrl && <img src={imageUrl} alt="attachement" />}
        {type !== 'image' && (
          <div className="file-background">
            {' '}
            <span>GA</span>
          </div>
        )}
      </div>

      <div className="description">
        <span className="date">Add July 5, 2020</span>
        <h4 className="file-name">file name</h4>
        <div className="actions">
          <Button shape="round" size="small">
            Download
          </Button>
          <Button shape="round" size="small">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

CardAttachement.defaultProps = {
  imageUrl: null
};

export default CardAttachement;
