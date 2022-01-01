import React from 'react';
import Image, { ImageInterface } from '@components/image';
import { render, screen } from '@testing-library/react';

describe('Baged component', () => {
  test('Should render defautl image', () => {
    const imageProps: ImageInterface = { imageUrl: 'urlTest', type: 'default', name: 'greatImage' };
    render(
      <Image 
        imageUrl={imageProps.imageUrl} 
        type={imageProps.type}
        name={imageProps.name} 
      />
    );
    
    const image: HTMLImageElement = screen.getByAltText('greatImage');

    expect(image).toBeInTheDocument();
    expect(image.src).toContain('urlTest');
    expect(image).toHaveStyle(`width: 219px`);
    expect(image).toHaveStyle(`height: 130px`);
    expect(image).toHaveStyle(`border-radius: 12px`);
  });
});
