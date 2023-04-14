import React from "react";

import styles from "./Button.module.css";

function Button({ type, onclick, children }) {
  return (
    <button className={styles.button} type={type || "button"} onClick={onclick}>
      {children}
    </button>
  );
}
export default Button;
