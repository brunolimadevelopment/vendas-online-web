import { createContext, useContext, useState } from 'react';

interface globalData {
  accessToken?: string;
}

interface globalContextProps {
  globalData: globalData;
  setGlobalData: (globalData: globalData) => void;
}

interface GlobalProvideProps {
  children: React.ReactNode;
}

const GlobalContext = createContext({} as globalContextProps);

// Hook to main.tsx
export const GlobalProvider = ({ children }: GlobalProvideProps) => {
  const [globalData, setGlobalData] = useState<globalData>({});
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook to components
export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setAccessToken = (accessToken: string) => {
    setGlobalData({
      ...globalData,
      accessToken,
    });
  };

  return {
    accessToken: globalData?.accessToken,
    setAccessToken,
  };
};
