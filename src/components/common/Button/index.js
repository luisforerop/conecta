import React from 'react'
import styles from './Button.module.css'

const Button = props => {
  const { children, isDark, customStyle, type, handler } = props
  return (
    <button
      className={`${styles.myButton} ${isDark ? styles.dark : styles.light}`}
      style={customStyle}
      onClick={handler}
      type={type}
    >
      { children }
    </button>
  )
}

export default Button
