import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonAntd = styled(Button)`
  width: 100%;
  background-color: #000;
  transition: all ease 0.5s;
  color: #fff;
  &:hover {
    background-color: #3d3d3d;
  }
`;
