import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import InputMoney from '../../../shared/components/inputs/inputMoney/inputMoney';
import Select from '../../../shared/components/inputs/select/select';
import Screen from '../../../shared/components/screen/Screen';
import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { DisplayFlexJustifyRight } from '../../../shared/styles/display.styled';
import { LimitedContainer } from '../../../shared/styles/limited.styled';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRoutesEnum } from '../routes';
import { ProductInsertContainer } from '../styles/productInsert.style';

const ProductInsert = () => {
  const {
    product,
    loading,
    disabledButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
  } = useInsertProduct();
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleOnClick = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS',
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: 'INSERIR PRODUTO',
        },
      ]}
    >
      <ProductInsertContainer>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => onChangeInput(event, 'name')}
            value={product.name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            onChange={(event) => onChangeInput(event, 'image')}
            value={product.image}
            margin="0px 0px 16px 0px"
            title="Url imagem"
            placeholder="Url Image"
          />
          <InputMoney
            onChange={(event) => onChangeInput(event, 'price', true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
          />
          <Select
            title="Categoria"
            margin="0px 0px 32px 0px"
            onChange={handleChangeSelect}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer width={140} margin="0 8px">
              <Button danger onClick={handleOnClick} size="large">
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={140}>
              <Button
                loading={loading}
                disabled={disabledButton}
                onClick={handleInsertProduct}
                size="large"
                type="primary"
              >
                Inserir Produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;
