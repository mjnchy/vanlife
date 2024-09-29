import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={`page ${styles.page}`} id='home-page'>
      <div className='content-container'>
        <h2 className={`header ${styles.header}`}>You got the travel plans, we got the travel vans</h2>
        <p className={`paragraph ${styles.paragraph}`}>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link className={`link btn ${styles.btn}`} to={'/vans'}>Find your vans</Link>
      </div>
    </div>
  );
};

export default Home;
