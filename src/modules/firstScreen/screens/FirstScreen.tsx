import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../../shared/hooks/useGlogbalContext';
import { ProductRoutesEnum } from '../../product/routes';

const FirstScreen = () => {
  const { user } = useGlobalContext();
  console.log(user);
  const navigate = useNavigate();

  // Verifica se existe token, antes de renderizar o componente FirstScreen
  useEffect(() => {
    if (user) {
      navigate(ProductRoutesEnum.PRODUCT);
    }
  }, []);
  return <Spin />;
};

export default FirstScreen;
