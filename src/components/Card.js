import React from 'react'
import styles from './Card.module.css'
import logo from '../images/Star_Wars_Logo.jpg'

const Card = ({image,name}) => {
    return (
        
        <div className={styles.card1}>
            <div className={styles.card2}> 
                <img src={logo} alt="logo" className={styles.img} />
               <div className={styles.h1css}> <h2 >{name}</h2></div>
            </div>
        </div>
    )
}

export default Card