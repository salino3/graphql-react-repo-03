import React from "react";
import "./notify-modal.styles.scss";

interface NotifyProps {
  modalMessage: string | null;
  color: string;
  styles?: string;
  children?: React.ReactNode;
}

export const Notify: React.FC<NotifyProps> = ({
  modalMessage,
  color,
  styles,
  children,
}) => {
  if (!modalMessage) return null;

  return (
    <div
      className={`rootModal 
    ${styles}`}
    >
      {children ? children : <h3 style={{ color }}>{modalMessage}</h3>}
    </div>
  );
};
