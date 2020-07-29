import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
      width: 340px;
      margin: 60px 0;
      text-align: center;

    h1 {
      color: #F4EDE8;
      font-size: 24px;
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }

    }

  }

  > a {
      display: block;
      margin-top: 8px;
      color: #ff9000;

      display: flex;
      align-items: center;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }

      svg {
        margin-right: 16px;
      }
  }


`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;