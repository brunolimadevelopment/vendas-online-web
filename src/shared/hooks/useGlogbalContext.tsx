import { createContext, useContext, useState } from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
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
    notification: globalData?.notification,
    setNotification,
  };
};
