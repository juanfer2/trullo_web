import styled from 'styled-components';

export const CardStyle: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  width: 243px;
  padding: 12px;
  margin: 10px;

  .title {
    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }

  .baged-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .quantity {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    .icon {
      color: #bdbdbd;
    }

    span {
      color: #bdbdbd;
      margin-left: 3px;
    }
  }
`;
