import React from 'react'
import NavBar from '../components/NavBar'
import Footer1 from '../components/Footer1'
import styles from './MainTemplate.module.css'
const MainTemplates = ({children}) => {
  return (
    <div className={styles.back}>
      <NavBar />
      {children}
      <Footer1 />
    </div>
  )
}

export default MainTemplates