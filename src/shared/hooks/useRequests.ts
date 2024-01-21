import axios from 'axios';
import { useState } from 'react';

import { connectionAPIPost } from '../functions/connectionAPI';
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

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true); // aqui o load está true
    const returnData = connectionAPIPost(url, body)
      .then((result) => {
        setNotification('Entrando...', 'success', 'Usuário logado com sucesso!');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error', 'Verifique seu email e senha!');
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
