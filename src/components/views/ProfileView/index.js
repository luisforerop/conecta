import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../common/Button'
import CircleImage from '../../common/CicleImage'
import MyDescription from '../../common/Description'
import PrincipalCard from '../../common/PrincipalCard'
import Product from '../../common/Product'
import styles from './ProfileView.module.css'

const willContact = () => alert('Pronto nos contactaremos contigo')

const Necessities = props => {
  const urlDefault = 'https://image.freepik.com/vector-gratis/concepto-caridad-vector-doodle-donacion-alimentos_53876-126424.jpg'
  const { necessitiesList } = props
  return(
    <>
      <h2 className={styles.title}>NECESIDADES</h2>
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
    </>
  )
}

const Events = props => {
  const { eventList } = props
  return(
    <>
      <h2 className={styles.title}>EVENTOS</h2>
      <div className={styles.eventsContainer}>    
        {eventList?.map((event, index) => {
          return event ? (
            <PrincipalCard
              key={event.id || `${index}-event`}
              title={event.title}
              description={event.description}
              buttonText='Participa'
              buttonHandler={willContact}
              buttonCustomStyle={customStyles.buttons}
            />
          ) : null
        })}
      </div>
    </>
  )
}

const Products = props => {
  const { productsList } = props;
  return(
    <div className={styles.productsContainer}>
      {productsList.map((product, index) => (
        <Product
          key={product.id || `${index}-product`}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  )
}

const customStyles = {
  container: {
    backgroundColor: 'white',
    width: 'auto',
    margin: '5px 20px',
    paddingLeft: 100,
    marginTop: 30
  },
  buttonStyle: {
    position: 'absolute',
    top: 0,
    margin: 20,
    padding: '10px 20px'
  },
  buttons: {
    width: 150,
    marginTop: 5
  }
}

const defaultNecessities = [
  {
    id: 1,
    title: 'Alimentaci??n'
  },
  {
    id: 2,
    title: 'Medicinas'
  },
  {
    id: 3,
    title: 'Antibi??ticos'
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

const defaultProducts = [
  {
    id:1,
    title: 'Cuadro',
    price: 45000
  },
  {
    id:2,
    title: 'Cer??mica',
    price: 30000
  },
  {
    id:3,
    title: 'Bufanda',
    price: 25000
  },
]

const ProfileView = () => {
  const { title, buttonsContainer } = styles
  const history = useHistory()
  const goBack = () => history.push('/ancianatos')
  return (
    <div>
      <Button
        customStyle={customStyles.buttonStyle}
        isDark={true}
        handler={goBack}
      >
        Lista de ancianatos
      </Button>
      <PrincipalCard
        title={'Ancianato Ancestros'}
        customStyles={ customStyles }
        >
        <MyDescription
          phone='3127294152'
          email='ancestros@gmail.com'
          address='Calle 20 #10'
          city='Bogot??'
        />
      </PrincipalCard>      
      <Necessities
        necessitiesList={defaultNecessities}
        />
      <div className={buttonsContainer}>
        <Button
          handler={willContact}
          isDark={true}
          customStyle={{marginRight: 20, width: 150}}
        >
          Dona aqu??
        </Button>
        <Button
          handler={willContact}
          isDark={true}
          customStyle={{width: 150}}
        >
          S?? voluntario
        </Button>        
      </div>
      <h2 className={title}>PRODUCTOS</h2>
      <Products
        productsList={defaultProducts}
      />      
      <Events
        eventList={defaultEvents}
      />
    </div>
  )
}

export default ProfileView
