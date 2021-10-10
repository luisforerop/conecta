import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../common/Button'
import PrincipalCard from '../../common/PrincipalCard'
import styles from './EventsListPage.module.css'

const eventList = [
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

const EventsListPage = () => {
  const history = useHistory()
  const goToElderly = () => history.push('/ancianatos')
  const takePart = () => alert('Nos contactaremos contigo')
  const customStyle = {
    marginTop: 5,
    width:150
  }
  return (
    <>
      <div className={styles.titleContainer}>
        <Button
          isDark={true}
          handler={goToElderly}
          customStyle={customStyle}
        >
          ANCIANATOS
        </Button>
      </div>
      <div className={styles.container}>
        {eventList.map((event, index) => (
          <PrincipalCard
            key={event?.id || `${index}-event`}
            title={event.title}
            description={event.description}
            buttonText='Participa'
            buttonHandler={takePart}
            buttonCustomStyle={customStyle}
          />
        ))}
    </div>
    </>
  )
}

export default EventsListPage
