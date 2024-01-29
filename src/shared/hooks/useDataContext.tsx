import { createContext, useContext, useState } from 'react';

import { CategoryType } from '../types/CategoryType';
import { ProductType } from '../types/ProductType';

interface DataContext {
  products?: ProductType[];
  categories?: CategoryType[];
}

interface DataContextProps {
  data: DataContext;
  setData: (data: DataContext) => void;
}

interface DataProvideProps {
  children: React.ReactNode;
}

const DataContext = createContext({} as DataContextProps);

// Hook to main.tsx
export const DataProvider = ({ children }: DataProvideProps) => {
  const [data, setData] = useState<DataContext>({});
  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

// Hook to components
export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  // Setando Products na variavel data.
  const setProducts = (products: ProductType[]) => {
    setData({
      ...data,
      products,
    });
  };

  const setCategories = (categories: CategoryType[]) => {
    setData({
      ...data,
      categories,
    });
  };

  // Retorna a variaveil (Products) e os métodos criados para serem usados para alterare o valor do useDataContext.
  return {
    products: data?.products || [],
    categories: data?.categories || [],
    setProducts,
    setCategories,
  };
};
