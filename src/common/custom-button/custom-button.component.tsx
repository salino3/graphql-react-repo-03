import React from "react";
import "./custom-button.styles.scss";

interface Props {
  txt: string;
  type: "submit" | "reset" | "button" | undefined;
  styles?: string | undefined;
  sm?: boolean;
  click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: React.FC<Props> = (props) => {
  const { txt, type, styles, sm = true, click } = props;

  return (
    <div
      className={`${
        sm ? "rootCustomSmallButton" : "rootCustomButton"
      } ${styles}`}
    >
      <button onClick={click} className="btnCustom" type={type}>
        {txt}
      </button>
    </div>
  );
};
