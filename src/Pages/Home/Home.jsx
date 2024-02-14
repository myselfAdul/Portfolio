import React from 'react';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  return (
      <div className={styles.flexContainer}>
        <div className={styles.flexItem}>
          <div className={styles.title}>
            <h1>This is HooD</h1>
            <p>a react developer</p>
          </div>
        </div>

        <div className={styles.flexItem}>
          <div className={styles.home_hire}>
            <button onClick={()=>{
              navigate('/contact')
            }} ><h3>Hire Me</h3></button>
          </div>
        </div>
      </div>
  );
};

export default Home;
