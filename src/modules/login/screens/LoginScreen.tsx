import { MailOutlined, UserOutlined } from '@ant-design/icons';

import Input from '../../../shared/inputs/input/input';
import {
  BlackBox,
  BtnLogin,
  ContainerLogin,
  LoginImage,
  Menssage,
  RegisterTitle,
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
        <Menssage>Acesse sua conta agora mesmo.</Menssage>
        <BtnLogin>Entrar</BtnLogin>
        <p>Esqueci minha senha</p>
      </BlackBox>
      <WhiteBox>
        <RegisterTitle>
          <strong>Crie sua conta</strong>
          <span>Preencha seus dados</span>
        </RegisterTitle>

        <Input
          size="large"
          title="Nome"
          placeholder="Digite seu nome"
          addonBefore={<UserOutlined />}
        />
        <Input
          size="large"
          title="Email"
          placeholder="Digite seu email"
          addonBefore={<MailOutlined />}
        />
      </WhiteBox>
    </ContainerLogin>
  );
};

export default LoginScreen;
