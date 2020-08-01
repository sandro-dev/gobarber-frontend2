import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #232129;
  border-radius: 10px;
  padding: 16px;

  display: flex;
  align-items: center;
  border: 2px solid #232129;
  color: #666360;

  ${(props) =>
    props.isFocused &&
    css`
      color: #f99000;
      border-color: #f99000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #f99000;
    `}


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
