import React from 'react'
import styles from './Card.module.css'

import { useNavigate } from 'react-router-dom'

const Card = ({object}) => {
     const navigate = useNavigate();
     const numbeer = Math.floor(Math.random() * 80);

    
    let logo2 = require(`../images/people/${numbeer}.jpg`);
     const handleNavigate = (x)=>{
        
        
         navigate(`/details`, {state:{object: x}})
     }
   
    return (

        <div onClick={()=>handleNavigate(object) } className={styles.card1}  >
            <div className={styles.card2}>
                <img src={logo2} alt="logo" className={styles.img} />
                <div className={styles.h1css}> <h2 >{object.name}</h2></div>   
            </div>
            
        </div>
        
    )
}

export default Card