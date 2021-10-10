import React from 'react'
import styles from './footer.module.css'
import twitter from './icons/twitter.png';
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import whatsapp from './icons/whatsapp.png';


const Footer = props => {
    return (
      <div className={styles.footercontainer}>
          <div className={styles.title}>
              <h1>Siguenos en: </h1>
              <img className={styles.twitter}
                  src={twitter}
                  alt={''}
              />
              <img className={styles.facebook}
                  src={facebook}
                  alt={''}
              />
              <img className={styles.instagram}
                  src={instagram}
                  alt={''}
              />
              <img className={styles.whatsapp}
                  src={whatsapp}
                  alt={''}
              />
                <div className={styles.info}>
                    <ol className={styles.lista}>
                        <li>Politicas</li>
                        <li>DatosPersonales</li>
                        <li>Seguridad</li>
                    </ol>
                </div>
                <div className={styles.copp}>
                    <h5>Copyrigth©2021www.conecta.com</h5>
                </div>
          </div>
      </div>
    )
  }
  
  export default Footer