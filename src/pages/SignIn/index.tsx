import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background} from './style';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (

  <Container>

    <Content>

      <img src={logoImg} alt="Gobarber"/>

      <form>

        <h1>Faça seu login</h1>

        <input type="text" placeholder="E-mail"/>

        <input type="password" placeholder="Senha"/>

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>

      </form>

      <a href="signup">
        <FiLogIn />
        Criar conta
      </a>

    </Content>

    <Background />

  </Container>


);

export default SignIn;
