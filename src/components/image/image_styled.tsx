import styled from 'styled-components';

export const ImageSizes: any = {
  default: {
    width: '219px',
    height: '130px',
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
  }
`;
