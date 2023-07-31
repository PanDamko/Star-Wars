import React from 'react'
import MainTemplates from '../templates/MainTemplates'
import styles from './DetailsPage.module.css'
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const { state: { object } } = useLocation();
  
  return (
    <MainTemplates>
      <div className={styles.details}>
        <div className={styles.details2}><h3>Details about </h3></div>
       
       <div className={styles.details2}><h1>{object.name}</h1></div>
       </div>
    </MainTemplates>
  )
}

export default DetailsPage