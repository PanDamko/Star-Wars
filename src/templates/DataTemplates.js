import React, { useEffect} from 'react'
import Card from '../components/Card'
import styles from '../templates/TemplateS.module.css'





const DataTemplates = ({setCnt, cnt, data,}) => {
  useEffect(() => {
    cnt === -1 && setCnt(len)
    cnt >= len-4 && setCnt(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cnt])
 
  const len = data.data.results.length
  console.log(len);
  console.log(cnt);
  return (
    
    <div className={styles.row} >
     
     {/* {cnt === 0  ? "":<i className={styles.leftarrow} onClick={() => setCnt(cnt - 1)}></i>} */}
     <i className={styles.leftarrow} onClick={() => setCnt(cnt - 1)}></i>
      {data.data.results[cnt] === undefined  ?"":<Card object={data.data.results[cnt]}  />}
      {data.data.results[cnt+1] === undefined  ?"":<Card object={data.data.results[cnt+1]} />}
      {data.data.results[cnt+2] === undefined  ?"":<Card object={data.data.results[cnt+2]} />}
      {data.data.results[cnt+3] === undefined  ?"": <Card object={data.data.results[cnt+3]} />}
      {data.data.results[cnt+4] === undefined  ?"":<Card  object={data.data.results[cnt+4]} />}
      <i className={styles.rightarrow} onClick={() => setCnt(cnt + 1)}></i>
      {/* {cnt >= 5  ? "":<i className={styles.rightarrow} onClick={() => setCnt(cnt + 1)}></i>} */}
    </div>

  )
}

export default DataTemplates