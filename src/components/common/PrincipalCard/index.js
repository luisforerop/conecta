import React from 'react'
import Button from '../Button'
import styles from './PrincipalCard.module.css'

const PrincipalCard = props => {
  const { urlImage, title, description, buttonText } = props
  const urlDefault = 'https://media.gettyimages.com/photos/happy-senior-man-sitting-at-home-picture-id912073272?s=612x612'
  const { title: titleStyle, image, containerInfo, container, descriptionContainer } = styles

  return (
    <div className={container}>
      <img
        alt='hola'
        src={urlImage || urlDefault}
        className={image}
      />
      <div className={containerInfo}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={descriptionContainer}>{description}</p>
        <Button>{buttonText || 'Conecta'}</Button>
      </div>
    </div>
  )
}

export default PrincipalCard
