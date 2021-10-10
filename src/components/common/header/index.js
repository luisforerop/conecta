import React from 'react'
import styles from './header.module.css'
import logo from './icon/logo.png';


const Header = props => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>CONECTA</h1>
            <img className={styles.logo}
                src={logo}
                alt={''}
            />
        </div>
    </div>
  )
}

export default Header
