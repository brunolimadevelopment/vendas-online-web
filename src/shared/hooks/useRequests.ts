import axios from 'axios';
import { useState } from 'react';

import { useGlobalContext } from './useGlogbalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true); // aqui o load está true
    return await axios({
      method: 'get',
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });
  };

  const postRequest = async (url: string, body: any) => {
    setLoading(true); // aqui o load está true
    const returnData = await axios({
      method: 'post',
      url: url,
      data: body,
    })
      .then((result) => {
        setNotification('Entrando...', 'success', 'Usuário logado com sucesso!');
        return result.data;
      })
      .catch(() => {
        setNotification('Senha inválida', 'error', 'Verifique seu email e senha!');
      });

    setLoading(false);
    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
