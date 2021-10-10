import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../common/Button'
import CircleImage from '../../common/CicleImage'
import PrincipalCard from '../../common/PrincipalCard'
import Product from '../../common/Product'
import styles from './ProfileView.module.css'

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

const defaultProducts = [
  {
    id:1,
    title: 'Cuadro',
    price: 45000
  },
  {
    id:2,
    title: 'Cerámica',
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
    }
  }
  const description = 'test<br>'
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
        description={description}
        customStyles={ customStyles }
      />      
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
