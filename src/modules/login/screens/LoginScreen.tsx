import { MailOutlined, UserOutlined } from '@ant-design/icons';

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
        />
        <Input
          size="large"
          title="Email"
          placeholder="Digite seu email"
          margin="20px 0 0"
          addonBefore={<MailOutlined />}
        />
        <Button size="large" type="primary" margin="20px 0 0">
          ENTRAR
        </Button>
      </WhiteBox>
    </ContainerLogin>
  );
};

export default LoginScreen;
