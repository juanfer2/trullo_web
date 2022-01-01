import styled from 'styled-components';

export const BadgeStyle: any = styled.div`
  background-color: ${(props: any) => props.background};
  border-radius: 8px;

  .text {
    color: ${(props: any) => props.color};
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
  }
`;

export const typeColor = {
  primary: { background: '#D5E6FB', color: '#2F80ED' },
  secondary: { background: '#D3EADD', color: '#219653' },
  warning: { background: '#EBDCF9', color: '#9B51E0' }
};
