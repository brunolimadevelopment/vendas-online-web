import axios from 'axios';

import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../constants/errosStatus';
import { MethodsEnum } from '../enums/methods.enum';

export default class ConnectAPI {
  static async call<T>(url: string, method: string, body?: unknown) {
    // verifica o method
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown) {
    return ConnectAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
    });
  }
}

export const connectionAPIGet = async <T>(url: string) => {
  return ConnectAPI.connect(url, MethodsEnum.GET);
};

export const connectionAPIDelete = async <T>(url: string) => {
  return ConnectAPI.connect(url, MethodsEnum.DELETE);
};

export const connectionAPIPost = async <T>(url: string, body: unknown) => {
  return ConnectAPI.connect(url, MethodsEnum.POST);
};

export const connectionAPIPut = async <T>(url: string, body: unknown) => {
  return ConnectAPI.connect(url, MethodsEnum.PUT);
};

export const connectionAPIPatch = async <T>(url: string, body: unknown) => {
  return ConnectAPI.connect(url, MethodsEnum.PATCH);
};
