import React from 'react'
import Button from '../../common/Button'
import CircleImage from '../../common/CicleImage'
import PrincipalCard from '../../common/PrincipalCard'
import styles from './ProfileView.module.css'

const Necessities = props => {
  const urlDefault = 'https://media.gettyimages.com/photos/happy-senior-man-sitting-at-home-picture-id912073272?s=612x612'
  const { necessitiesList } = props
  return(
    <div className={styles.containerNecessities}>
      {necessitiesList?.map((necessity, index) => (
      <CircleImage
        src={urlDefault}
        alt={'Ancianato Ancestros'}
        title={necessity.title}
        key={necessity.id || `${index}-necessity`}
      />
    ))}
    </div>
  )
}

const Events = props => {
  const { eventList } = props
  return(
    <div className={styles.eventsContainer}>
      {eventList?.map((event, index) => {
        return event ? (
          <PrincipalCard
            key={event.id || `${index}-event`}
            title={event.title}
            description={event.description}
            buttonText='Participa'
          />
        ) : null
      })}
    </div>
  )
}


const defaultNecessities = [
  {
    id: 1,
    title: 'Alimentación'
  },
  {
    id: 2,
    title: 'Medicinas'
  },
  {
    id: 3,
    title: 'Antibióticos'
  },
  {
    id: 4,
    title: 'Voluntarios'
  }
]

const defaultEvents = [
  {
    id: 1,
    title: 'Por medicamentos',
    description: 'Necesitamos medicamentos'
  },
  {
    id: 2,
    title: 'Por medicamentos',
    description: 'Necesitamos medicamentos'
  },
  {
    id: 3,
    title: 'Por medicamentos',
    description: 'Necesitamos medicamentos'
  }

]

const ProfileView = () => {
  const { title, buttonsContainer } = styles
  return (
    <div>
      <PrincipalCard
        title={'Ancianato Ancestros'}
        description={'sdjhskjdfhsdkjfhsdkjfhsdkjfhksdjfh'}
      />
      <h2 className={title}>NECESIDADES</h2>
      <Necessities
        necessitiesList={defaultNecessities}
      />
      <div className={buttonsContainer}>
        <Button
          isDark={true}
        >
          Dona aquí
        </Button>
        <Button
          isDark={true}
        >
          Sé voluntario
        </Button>
        {/* PRODUCTOS */}
      </div>
      <h2 className={title}>EVENTOS</h2>
      <Events
        eventList={defaultEvents}
      />
    </div>
  )
}

export default ProfileView
