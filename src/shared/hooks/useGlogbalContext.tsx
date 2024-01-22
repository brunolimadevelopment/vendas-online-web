import { createContext, useContext, useEffect, useState } from 'react';

import { getAuthorizationToken, setAuthorizationToken } from '../functions/connection/auth';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  accessToken?: string;
  notification?: NotificationProps;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

interface GlobalProvideProps {
  children: React.ReactNode;
}

const GlobalContext = createContext({} as GlobalContextProps);

// Hook to main.tsx
export const GlobalProvider = ({ children }: GlobalProvideProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook to components
export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  // Setando accessToken na variavel global: globalData.
  const setAccessToken = (accessToken: string) => {
    setAuthorizationToken(accessToken);
    setGlobalData({
      ...globalData,
      accessToken,
    });
  };

  // Setando notification na variavel global: globalData.
  const setNotification = (message: string, type: NotificationType, description: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  };

  // Retorna as variaveis ( accessToken e notification ) e os métodos criados para serem usados para alterarem os valores do useGlobalContext.
  return {
    accessToken: globalData?.accessToken,
    notification: globalData?.notification,
    setAccessToken,
    setNotification,
  };
};
