import React, { useEffect } from 'react'
import Card from '../components/Card'
import styles from '../templates/TemplateS.module.css'
import DetailsPage from '../pages/DetailsPage'


const DataTemplates = ({setCnt, cnt, data, films}) => {
  useEffect(() => {
    cnt === 0 && setCnt(len-1)
    cnt >= len && setCnt(1)
  }, [cnt])

  const image = "dasa"
 
  
  const len = data.data.results.length
 
  return (
    <div className={styles.row}>
       <i className={styles.leftarrow} onClick={() => setCnt(cnt - 1)}></i>
      <Card image={image} name={films ? data.data.results[cnt-1].title : data.data.results[cnt-1].name} />
      <Card image="adsad" name={films ? data.data.results[cnt].title : data.data.results[cnt].name} />
      <Card image="adsad" name={films ? data.data.results[cnt+1].title : data.data.results[cnt+1].name} />
      <Card image="adsad" name={films ? data.data.results[cnt+2].title : data.data.results[cnt+2].name} />
      <Card image="adsad" name={films ? data.data.results[cnt+3].title : data.data.results[cnt+3].name} />
      <i className={styles.rightarrow} onClick={() => setCnt(cnt + 1)}></i>
    </div>

  )
}

export default DataTemplates