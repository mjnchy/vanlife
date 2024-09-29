import img from '../assets/images/about-hero.png';
import styles from './about.module.css';

const About = () => {
  return (
    <div className='page' id='about-page'>
      <img className={`image ${styles.image}`} src={img} />
    </div>
  );
};

export default About;
