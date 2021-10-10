import React from 'react'
import styles from './Product.module.css'

const Product = props => {
  const urlDefault = 'https://image.freepik.com/vector-gratis/plantilla-exposicion-robotica-isometrica-robots-publicitarios-empresa-que-utilizan-soportes-promocionales-aislados_1284-38579.jpg'
  const { urlImage, altImage, title, price } = props
  return (
    <div className={styles.container}>
      <img
        src={urlImage || urlDefault}
        alt={altImage || ''}
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{`$${price}`}</p>
    </div>
  )
}

export default Product
