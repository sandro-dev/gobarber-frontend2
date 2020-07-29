import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  color: #666360;

  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #666360;
  }

  &::placeholder {
    color: #666360;
  }

  & + div {
    margin-top: 8px;
  }


`;
