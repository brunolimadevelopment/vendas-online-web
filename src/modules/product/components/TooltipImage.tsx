import { Tooltip } from 'antd';

import { ProductType } from '../../../shared/types/ProductType';

interface TootipImageProps {
  product: ProductType;
}
const TooltipImage = ({ product }: TootipImageProps) => {
  return (
    <Tooltip title={product.name}>
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TooltipImage;
