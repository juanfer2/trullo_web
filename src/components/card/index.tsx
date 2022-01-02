import React from 'react';
import { CardStyle } from '@components/card/card_styled';
import Image from '@components/image';
import Badge from '@components/badge';

interface CardInterface {
  title: string;
  listBadged: any[];
  imageUrl: string;
  avatarUrls: any[];
}

function Card({ title, listBadged, imageUrl, avatarUrls }: CardInterface) {
  return (
    <CardStyle>
      {imageUrl && <Image imageUrl={imageUrl} type="default" name="greatImage" />}
      <h4 className="title">{title}</h4>
      {false && (
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
        <div className="quantity">...</div>
      </div>
    </CardStyle>
  );
}

export default Card;
