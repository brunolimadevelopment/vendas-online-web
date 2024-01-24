import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import { LoginRoutesEnum } from '../../login/routes';
import { ContainerPageNotFound } from '../styles/pageNotFound.styles';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(LoginRoutesEnum.LOGIN);
  };

  return (
    <ContainerPageNotFound>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você está visitando não existe."
        extra={
          <Button type="primary" size="large" onClick={handleClickButton}>
            Página de Login
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};

export default PageNotFound;
