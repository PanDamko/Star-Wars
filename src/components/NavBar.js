import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../images/Star_Wars_Logo.jpg'


const NavBar = () => {
  return (
    <header >
          
        <div className={styles.rowdisplay}>
          <img src={logo} alt="logo" className={styles.img} />
        <nav className={styles.navbar}>
        
                <ul className={styles.navlinks}> 
                    <li className={styles.navitem}>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link  to="/planets">Planets</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link to="/spaceships">Spaceships</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link to="/vechicles">Vehicles</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link to="/people">People</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link to="/films">Films</Link>
                    </li>
                    
                </ul>
        </nav>
        </div>
    </header>
  )
}

export default NavBar