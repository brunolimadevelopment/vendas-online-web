import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/input';
import {
  BlackBox,
  ContainerLogin,
  LoginImage,
  LoginTitle,
  Welcome,
  WhiteBox,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`username: ${username}, password: ${password}`);
  };

  return (
    <ContainerLogin>
      <BlackBox>
        <LoginImage src="./logo.svg" />
        <Welcome>
          <strong>Bem-vindo de volta!</strong>
        </Welcome>
      </BlackBox>
      <WhiteBox>
        <LoginTitle level={2} type="secondary">
          Login
        </LoginTitle>
        <Input
          size="large"
          title="Nome"
          placeholder="Digite seu nome"
          margin="15px 0 0"
          addonBefore={<UserOutlined />}
          onChange={handleUsername}
          value={username}
        />
        <Input
          type="password"
          size="large"
          title="Password"
          placeholder="Digite sua senha"
          margin="20px 0 0"
          addonBefore={<MailOutlined />}
          onChange={handlePassword}
          value={password}
        />
        <Button size="large" type="primary" margin="20px 0 0" onClick={handleLogin}>
          ENTRAR
        </Button>
      </WhiteBox>
    </ContainerLogin>
  );
};

export default LoginScreen;
