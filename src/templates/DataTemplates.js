import React from 'react'
import Card from '../components/Card'
import styles from '../templates/TemplateS.module.css'

const DataTemplates = () => {
  return (
    <div className={styles.row}>
        
        <i className={styles.leftarrow} onClick={()=>console.log("lwey")}></i>
    <Card /><Card /><Card /><Card /> <Card /> 
    <i className={styles.rightarrow} onClick={()=>console.log("prawy")}></i>
    
      </div>
  )
}

export default DataTemplates