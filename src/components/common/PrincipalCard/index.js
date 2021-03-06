import React from 'react'
import Button from '../Button'
import styles from './PrincipalCard.module.css'

const PrincipalCard = props => {
  const { urlImage, title, description, buttonText, customStyles, buttonHandler, children, buttonCustomStyle } = props
  const urlDefault = 'https://media.gettyimages.com/photos/happy-senior-man-sitting-at-home-picture-id912073272?s=612x612'
  const { title: titleStyle, image, containerInfo, container, descriptionContainer } = styles
  return (
    <div className={container} style={customStyles?.container}>
      <img
        alt='hola'
        src={urlImage || urlDefault}
        className={image}
        style={customStyles?.image}
      />
      <div className={containerInfo} style={customStyles?.containerInfo}>
        <h2 className={titleStyle}>{title}</h2>
        <>{children}</>
        {descriptionContainer ? 
        <p className={descriptionContainer}>{description}</p> : null}
        {buttonText ?
          <Button
            handler={ buttonHandler }
            customStyle={ buttonCustomStyle }
          >
            {buttonText}
          </Button> : null
        }
      </div>
    </div>
  )
}

export default PrincipalCard
