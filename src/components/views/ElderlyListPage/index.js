import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../common/Button'
import MyDescription from '../../common/Description'
import PrincipalCard from '../../common/PrincipalCard'
import styles from './ElderlyListPage.module.css'

const elderlyList = [
  {
    id: 1,
    title: 'Hogar San José',
    description: {
      phone: '3157894152',
      email: 'sanjosehogar@gmail.com',
      address: 'Cra 9 # 12 - 88',
      city: 'Tunja',
    },
  },
  {
    id: 2,
    title: 'Hogar Santo Domingo',
    description: {
      phone: '2144587952',
      email: 'hogarsantodomingo@hotmail.com',
      address: 'Calle 25 #12 - 55',
      city: 'Chiquinquirá',
    },
  },
  {
    id: 3,
    title: 'Ancianato ancestros',
    description: {
      phone: '3127294152',
      email: 'ancestros@gmail.com',
      address: 'Calle 20 #10',
      city: 'Bogotá',
    },
  }
]

const ElderlyListPage = () => {
  const history = useHistory()
  const goToEvents = () => history.push('/eventos')
  const goToElderly = () => history.push('/ancianato')
  const stylesCustom = {
    containerInfo:{
      width: 300
    },
    button: {
      width: 150,
      marginTop: 5
    }
  }
  return (
    <>
      <div className={styles.titleContainer}>
        <Button
          isDark={true}
          handler={goToEvents}
          customStyle={stylesCustom.button}
        >
          EVENTOS
        </Button>
      </div>
      <div className={styles.container}>
        {elderlyList.map((elderly, index) => {
          const { description, id, title } = elderly || {undefined}
          const {  phone, email, address, city } = description ||  {undefined}    
          return(
            <PrincipalCard
              key={id || `${index}-elderly`}
              title={title}
              buttonText='Más info'
              buttonHandler={goToElderly}
              customStyles={stylesCustom}
              buttonCustomStyle={stylesCustom.button}
            >
              {<MyDescription
                phone={phone}
                email={email}
                address={address}
                city={city}
              />}
            </PrincipalCard>
          )
        })}
    </div>
    </>
  )
}

export default ElderlyListPage
