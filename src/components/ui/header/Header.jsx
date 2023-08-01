import React from 'react'
import Navbar from '../../navbar/Navbar'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header + " absolute z-10"}>
      <Navbar/>
    </header>
  )
}

export default Header