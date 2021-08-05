import React from "react";
import styles from "./form-wrap.module.css";

export function FormWrap({ children }) {
  return (
    <div className={`${styles.mainWrap}`}>
      <div className={`${styles.formWrap}`}>{children}</div>
    </div>
  );
}
