import { Typography } from 'antd';
import styled from 'styled-components';
const { Title } = Typography;

export const PageLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
`;

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
  justify-content: center;
  flex-direction: column;
  color: white;
`;

export const Welcome = styled.h2`
  font-size: 24px;
  font-weight: bolder;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-content: center;
  color: white;
`;

export const LoginTitle = styled(Title)`
  color: black;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
