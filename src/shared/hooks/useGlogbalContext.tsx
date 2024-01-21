import { createContext, useContext, useState } from 'react';

interface globalData {
  accessToken?: string;
}

interface globalContextProps {
  globalData: globalData;
  setGlobalData: (globalData: globalData) => void;
}

const GlobalContext = createContext({} as globalContextProps);

interface GlobalProvideProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProvideProps) => {
  const [globalData, setGlobalData] = useState<globalData>({});
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

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
