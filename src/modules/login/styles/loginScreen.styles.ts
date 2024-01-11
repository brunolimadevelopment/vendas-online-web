import styled from 'styled-components';

export const ContainerLogin = styled.div`
  width: 1093px;
  height: 625px;
  display: flex;
`;

export const BlackBox = styled.div`
  width: 35%;
  height: 100%;
  background-color: black;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

export const LoginImage = styled.img`
  width: 367px;
  margin: 83px auto;
  max-width: 70%;
`;

export const Welcome = styled.h2`
  font-size: 24px;
  font-weight: bolder;
  font-family: 'Poppins', sans-serif;
`;

export const Menssage = styled.p`
  font-size: 16px;
  font-weight: 100;
  font-family: 'Poppins', sans-serif;
`;

export const BtnLogin = styled.button`
  width: 191px;
  height: 66px;
  border-radius: 30px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  margin: 56px 0;
  cursor: pointer;
  transition: ease 0.5s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const WhiteBox = styled.div`
  width: 65%;
  height: 100%;
  background-color: #fffafa;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

export const RegisterTitle = styled.h2`
  color: black;
  font-size: 32px;
  margin: 74px 0 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: bolder;
`;

export const RegisterDesc = styled.p`
  color: #a5a5a5;
  margin: 0;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
`;
