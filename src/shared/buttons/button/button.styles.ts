import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonAntd = styled(Button)`
  width: 50%;
  background-color: #000;
  transition: all ease 0.5s;
  &:hover {
    background-color: #3d3d3d;
  }
`;
