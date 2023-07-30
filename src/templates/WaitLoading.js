import React, { useState } from 'react'
import { useFetch } from '../atoms/useFetch'
import DataTemplates from './DataTemplates'
import styles from '../templates/TemplateS.module.css'
const WaitLoading = ({url,films}) => {

    const [cnt, setCnt] = useState(1);
  const data = useFetch(url);
  
  
 
  
  
  return (
    <div className={styles.row}>
    {data.loading ? <h1 className={styles.tex}>Loading...</h1>: <DataTemplates setCnt={setCnt} cnt={cnt} data={data} films={films}/>}
    </div>
  )
}

export default WaitLoading