import React from 'react';
import {CardStyle} from '@components/card/card_styled'
import Image from '@components/image'
import Baged from '@components/baged';

interface CardInterface {
  title: string;
  listBadged: any[];
  imageUrl: string;
  avatarUrls: string[];
}

function Card({title, listBadged, imageUrl, avatarUrls}: CardInterface) {
  return (
    <CardStyle>
      { 
        imageUrl && <Image imageUrl={imageUrl} type='default'/>
      }
      <h4 className='title'>{title}</h4>
      {
        listBadged && 
        <div  className='baged-list'>
          {listBadged.map((baged: any) =>
          <Baged key={baged.label} type={baged.type} label={baged.label}/>
        )}
        </div>
       
      }
      <div className='info'>
        <div className='avatars'>
          {avatarUrls && avatarUrls.map((image: any) => 
          <Image key={image} imageUrl={image} type='small'/>)}
        </div>
        <div className="quantity">
          ...
        </div>
      </div>
    </CardStyle>
  );
}

export default Card;
