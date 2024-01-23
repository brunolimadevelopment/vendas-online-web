import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import SVGHome from '../../../shared/components/icons/SVGHome';
import Input from '../../../shared/components/inputs/input/input';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BlackBox,
  ContainerLogin,
  LoginTitle,
  Welcome,
  WhiteBox,
} from '../styles/loginScreen.styles';
import { UserType } from '../types/UserType';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // essa função vai ter que esperar - add o async. pois o axios vai no backend buscar os dados.
  const handleLogin = () => {
    authRequest({
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLogin>
      <BlackBox>
        <Welcome>
          <SVGHome width={170} height={49} />
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
        <Button
          size="large"
          loading={loading}
          type="primary"
          margin="20px 0 0"
          onClick={handleLogin}
        >
          ENTRAR
        </Button>
      </WhiteBox>
    </ContainerLogin>
  );
};

export default LoginScreen;
