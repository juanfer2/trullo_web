import styled from 'styled-components';

export const ImageSizes: any = {
  default: {
    width: '100%',
    height: '20vh',
    border: '12px'
  },
  small: {
    width: '34px',
    height: '34px',
    border: '8px'
  }
};

export const ImageStyle: any = styled.div`
  img {
    border-radius: ${(props: any) => props.border};
    width: ${(props: any) => props.width};
    height: ${(props: any) => props.height};
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }
`;
