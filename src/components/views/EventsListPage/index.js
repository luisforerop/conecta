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
  return (
    <>
      <div className={styles.container}>
        <Button
          isDark={true}
          handler={goToElderly}
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
            
          />
        ))}
    </div>
    </>
  )
}

export default EventsListPage
