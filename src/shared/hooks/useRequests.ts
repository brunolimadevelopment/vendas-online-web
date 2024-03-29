import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, {
  connectionAPIPost,
  MethodType,
} from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlogbalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true); // aqui o load está true

    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error', '');
        return undefined;
      });

    setLoading(false);

    return returnObject;
  };

  // dispara ao fazer submit no form de login

  const authRequest = async (navigate: NavigateFunction, body: unknown): Promise<void> => {
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
    request,
  };
};
