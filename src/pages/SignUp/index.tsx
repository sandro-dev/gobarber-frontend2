import React from 'react';
import { FiUser, FiArrowLeft, FiLock, FiMail  } from 'react-icons/fi';

import { Container, Content, Background} from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => (

  <Container>

    <Background />

    <Content>

      <img src={logoImg} alt="Gobarber"/>

      <form>

        <h1>Faça seu cadastro</h1>

        <Input name="user" icon={FiUser} type="text" placeholder="Nome"/>

        <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>

        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Cadastrar</Button>

      </form>

      <a href="signup">
        <FiArrowLeft />
        Voltar para o login
      </a>

    </Content>


  </Container>


);

export default SignUp;
