import React from 'react';
import { CardStyle } from '@components/card/card_styled';
import Image from '@components/image';
import Badge from '@components/badge';
import ImageCrob from '@components/image/image_crop';
import { MessageFilled, FolderOpenFilled } from '@ant-design/icons';

interface CardInterface {
  title: string;
  listBadged?: any[];
  imageUrl?: string;
  avatarUrls?: any[];
}

function Card({ title, listBadged, imageUrl, avatarUrls }: CardInterface) {
  return (
    <CardStyle>
      {imageUrl && <ImageCrob imageUrl={imageUrl} />}

      <h4 className="title">{title}</h4>

      {listBadged && (
        <div className="baged-list">
          {listBadged.map((baged: any) => (
            <Badge key={baged.label} type={baged.type} label={baged.label} />
          ))}
        </div>
      )}

      <div className="info">
        <div className="avatars">
          {avatarUrls &&
            avatarUrls.map((image: any) => (
              <Image key={image.name} imageUrl={image.url} type="small" name={image.name} />
            ))}
        </div>

        <div className="quantity">
          <div className="quantity-message">
            <MessageFilled className="icon" />
            <span>2</span>
          </div>

          <div className="quantity-files">
            <FolderOpenFilled className="icon" />
            <span>3</span>
          </div>
        </div>
      </div>
    </CardStyle>
  );
}

Card.defaultProps = {
  imageUrl: null,
  listBadged: [],
  avatarUrls: []
};

export default Card;
