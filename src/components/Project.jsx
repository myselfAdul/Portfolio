import React from 'react'
import styles from './project.module.css'

const Project = ({ image, desc }) => {
  return (
    <div className={styles.project} >   
        <div className={styles.image}>
            <img src={image} alt={desc} width='500px' />
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default Project




