import React from "react";
import { ProductProps, initialState } from "@/redux";
import { Button, FormField } from "@/common";
import "./home-form-products.styles.scss";

export const HomeFormProducts: React.FC = () => {
  const [productData, setProductData] = React.useState<ProductProps>(
    initialState?.product
  );

  const handleChange = (key: keyof ProductProps) => (event: any) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [key]: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

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
