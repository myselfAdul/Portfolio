import React from 'react'
import styles from './projects.module.css'
import Project from '../../components/Project'

const Projects = () => {
  return (
    <div className={styles.projects_page}>
      <h1>Checkout some cool Projects</h1>
      <div className={styles.projectList}>
        {/* Pass image and description as props to Project */}
        <Project image="../dummycar.png" desc="Project 1 description " />
        <Project image="../dummycar.png" desc="Project 1 description" />
        <Project image="../truck.jpg" desc="Project 2 description" />
        <Project image="../home_img.jpg" desc="Project 1 description " />


      </div>
    </div>
  )
}

export default Projects
