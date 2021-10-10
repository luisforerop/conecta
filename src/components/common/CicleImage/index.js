import React from 'react'
import styles from './CircleImage.module.css'


const CircleImage = props => {
  const { alt, src, title } = props
  return (
    <div className={styles.container}>
      <img
        alt={alt}
        src={src}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}

export default CircleImage
