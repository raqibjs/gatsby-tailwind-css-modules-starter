import React from "react"

import * as styles from "./Button.module.css"

const Button = ({ children }) => {
  return (
    <>
      <button className={`${styles.btn} ${styles.btnPrimary}`}>
        {children}
      </button>
    </>
  )
}

export default Button
