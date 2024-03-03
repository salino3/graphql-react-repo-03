import React from "react";
import { Button, FormField } from "@/common";
import "./home-form-products.styles.scss";

export const HomeFormProducts: React.FC = () => {
  return (
    <div className="rootFormProducts">
      <form className="formProducts">
        <FormField
          name="name"
          label="name product"
          type="text"
          req
          pl={"name product"}
          handleChange={() => {}}
        />
        <FormField name="quantity" type="number" req handleChange={() => {}} />
        <FormField
          name="name"
          label="code product"
          type="text"
          req
          handleChange={() => {}}
        />
        <FormField name="price" type="number" req handleChange={() => {}} />
        <FormField
          name="company product"
          type="text"
          req
          handleChange={() => {}}
        />
        <div className="boxBtnsForm">
          <Button txt="Add" type="submit" />
          <Button txt="Reset" type="reset" />
        </div>
      </form>
    </div>
  );
};