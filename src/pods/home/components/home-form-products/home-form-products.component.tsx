import React from "react";
import { useProducts } from "@/graphql";
import { ProductProps, initialState } from "@/redux";
import { Button, FormField } from "@/common";
import "./home-form-products.styles.scss";

export const HomeFormProducts: React.FC = () => {
  const { createProduct } = useProducts();

  const {
    addProduct,
    errorMsg,
    clearError,
    modalMsg,
    clearModal,
    newUserData,
  } = createProduct();

  const { id, ...productWithoutId } = initialState?.product;
  const objForm = { ...productWithoutId };
  const [productData, setProductData] = React.useState<ProductProps>(objForm);

  const handleChange =
    (key: keyof ProductProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const newValue =
        key === "quantity" || key === "price" ? parseFloat(value) : value;
      setProductData({ ...productData, [key]: newValue });
    };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    addProduct({
      variables: productData,
    });
    console.log(productData);
  };

  return (
    <div className="rootFormProducts">
      <form className="formProducts" onSubmit={handleSubmit}>
        <FormField
          name="name"
          label="name product"
          type="text"
          req
          pl={"name product"}
          handleChange={handleChange("name")}
        />
        <FormField
          name="quantity"
          type="number"
          req
          handleChange={handleChange("quantity")}
        />
        <FormField
          name="name"
          label="code product"
          type="text"
          req
          handleChange={handleChange("code")}
        />
        <FormField
          name="price"
          type="number"
          req
          handleChange={handleChange("price")}
        />
        <FormField
          name="company product"
          type="text"
          req
          handleChange={handleChange("company")}
        />
        <div className="boxBtnsForm">
          <Button txt="Add" type="submit" />
          <Button txt="Reset" type="reset" />
        </div>
      </form>
    </div>
  );
};
