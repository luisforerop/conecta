import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../common/Button'
import PrincipalCard from '../../common/PrincipalCard'
import styles from './ElderlyListPage.module.css'

const elderlyList = [
  {
    id: 1,
    title: 'Azucar manuelita',
    description: 'loremssdfdfgkhñkfdñhkjñdfjhñfgklhjdfñlghjfgjhdñflgjkhdfghjdflkñgjdñgjklhdfhsadfgasuyrtfgaweifyg<sdjhfcgz<ksdfgzskdjfgzjdsfgkzsd',
  },
  {
    id: 2,
    title: 'Hogar Santo Domingo',
    description: 'loremssdfdfgkhñkfdñhkjñdfjhñfgklhjdfñlghjfgjhdñflgjkhdfghjdflkñgjdñgjklhdfhsadfgasuyrtfgaweifyg<sdjhfcgz<ksdfgzskdjfgzjdsfgkzsd',
  },
  {
    id: 3,
    title: 'Ancianato ancestros',
    description: 'loremssdfdfgkhñkfdñhkjñdfjhñfgklhjdfñlghjfgjhdñflgjkhdfghjdflkñgjdñgjklhdfhsadfgasuyrtfgaweifyg<sdjhfcgz<ksdfgzskdjfgzjdsfgkzsd',
  }
]

const ElderlyListPage = () => {
  const history = useHistory()
  const goToEvents = () => history.push('/eventos')
  const goToElderly = () => history.push('/ancianato')
  return (
    <>
      <div className={styles.container}>
        <Button
          isDark={true}
          handler={goToEvents}
        >
          EVENTOS
        </Button>
      </div>
      <div className={styles.container}>
        {elderlyList.map((elderly, index) => (
          <PrincipalCard
            key={elderly?.id || `${index}-elderly`}
            title={elderly.title}
            description={elderly.description}
            buttonText='Más info'
            buttonHandler={goToElderly}
          />
        ))}
    </div>
    </>
  )
}

export default ElderlyListPage
