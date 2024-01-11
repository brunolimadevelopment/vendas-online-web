import Input from '../../../shared/inputs/input/input';
import {
  BlackBox,
  BtnLogin,
  ContainerLogin,
  LoginImage,
  Menssage,
  RegisterDesc,
  RegisterTitle,
  Welcome,
  WhiteBox,
} from '../styles/loginScreen.styles';

export default function LoginScreen() {
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
        </RegisterTitle>
        <RegisterDesc>Preencha seus dados</RegisterDesc>
        <Input title="Nome" />
        <Input title="Email" />
      </WhiteBox>
    </ContainerLogin>
  );
}
