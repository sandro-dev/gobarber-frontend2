import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import { Container, Content, Background} from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (

  <Container>

    <Content>

      <img src={logoImg} alt="Gobarber"/>

      <form>

        <h1>Faça seu login</h1>

        <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>

        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

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
