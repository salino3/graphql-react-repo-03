import React from "react";
import { capitalizeWord } from "@/hooks";
import "./form-field.styles.scss";

interface Props {
  label?: string;
  name: string;
  type: string;
  styles?: string | undefined;
  req?: boolean | undefined;
  pl?: string | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const FormField: React.FC<Props> = (props) => {
  const { label, name, styles, type, req, pl, handleChange } = props;

  return (
    <div className={`rootFormField ${styles}`}>
      <label htmlFor={name}>{capitalizeWord(label || name)}</label>
      <input
        id={name}
        type={type}
        name={name}
        required={req}
        onChange={handleChange}
        placeholder={capitalizeWord(pl || name)}
      />
    </div>
  );
};
