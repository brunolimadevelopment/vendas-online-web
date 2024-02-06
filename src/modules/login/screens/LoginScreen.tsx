import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import SVGHome from '../../../shared/components/icons/SVGHome';
import Input from '../../../shared/components/inputs/input/input';
import { useRequests } from '../../../shared/hooks/useRequests';
import { LimitedContainer } from '../../../shared/styles/limited.styled';
import {
  BlackBox,
  ContainerLogin,
  LoginTitle,
  PageLogin,
  Welcome,
  WhiteBox,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    authRequest(navigate, {
      email: email,
      password: password,
    });
  };

  return (
    <PageLogin>
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
          <LimitedContainer width={400}>
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
          </LimitedContainer>
        </WhiteBox>
      </ContainerLogin>
    </PageLogin>
  );
};

export default LoginScreen;
