import SVGHome from '../icons/SVGHome';
import { ContainerLogoName, ContainerMenu } from './menu.style';

const Menu = () => {
  return (
    <ContainerMenu>
      <ContainerLogoName>
        <SVGHome width={120} height={49} />
      </ContainerLogoName>
    </ContainerMenu>
  );
};

export default Menu;
