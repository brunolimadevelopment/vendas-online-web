import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlogbalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setNotification, setUser } = useGlobalContext();

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

  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true); // aqui o load está true

    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification('Entrando...', 'success', 'Usuário logado com sucesso!');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error', 'Verifique seu email e senha!');
        return undefined;
      });

    setLoading(false);
    return returnData;
  };

  // dispara ao fazer submit no form de login
  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);
    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setAuthorizationToken(result.accessToken); // 1º armazena o token
        navigate(ProductRoutesEnum.PRODUCT); // 2º redireciona para /produtos
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error', '');
        return undefined;
      });

    setLoading(false);
  };

  return {
    loading,
    authRequest,
    getRequest,
    postRequest,
  };
};
