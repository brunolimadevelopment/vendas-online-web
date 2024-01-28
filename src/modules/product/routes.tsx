import { RouteObject } from 'react-router-dom';

import ProductInsertScreen from './screens/ProductInsertScreen';
import ProductScreen from './screens/ProductScreen';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
}
export const productScreens: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <ProductScreen />,
  },
  {
    path: ProductRoutesEnum.PRODUCT_INSERT,
    element: <ProductInsertScreen />,
  },
];
