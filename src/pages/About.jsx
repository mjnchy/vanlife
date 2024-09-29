import { Link } from 'react-router-dom';
import img from '../assets/images/about-hero.png';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={`page ${styles.page}`} id='about-page'>
      <img className={`image ${styles.image}`} src={img} />
      <div className={`content-container ${styles['content-container']}`}>
        <div className={`${styles['content-primary']}`}>
          <h2 className={`header ${styles.header}`}>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p className={`paragraph ${styles.paragraph}`}>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
          <p className={`paragraph ${styles.paragraph}`}>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className={styles['content-secondary']}>
          <h2 className={`header ${styles.header}`}>Your destination is waiting.<br />Your van is ready.</h2>
          <Link className={`link btn ${styles.link} ${styles.btn}`} to="/vans">Explore our vans</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
