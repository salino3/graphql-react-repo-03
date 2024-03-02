import React from "react";

export const Notify: React.FC<string> = (errorMessage) => {
  if (!errorMessage) return null;

  return (
    <div
      style={{
        color: "red",
        position: "fixed",
        fontSize: "42px",
        fontWeight: 600,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        textAlign: "center",
      }}
    >
      {errorMessage}
    </div>
  );
};
