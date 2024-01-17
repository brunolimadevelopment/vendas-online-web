import { MailOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // essa função vai ter que esperar - add o async. pois o axios vai no backend buscar os dados.
  const handleLogin = async () => {
    // await: espera a resposta do axios para continuar o codigo
    await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert('Fez login');
        return result.data;
      })
      .catch(() => {
        alert('Usuário ou senha inválido');
      });
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
          title="Email"
          placeholder="Digite seu email"
          margin="15px 0 0"
          addonBefore={<UserOutlined />}
          onChange={handleEmail}
          value={email}
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
