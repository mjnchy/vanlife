import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={`page ${styles.page}`} id='home-page'>
      <div className='content-container'>
        <h2 className={`header ${styles.header}`}>You got the travel plans, we got the travel vans</h2>
        <p className={`paragrpah ${styles.paragraph}`}>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      </div>
    </div>
  );
};

const extra = <Link to={'/vans'}>Find your vans</Link>;

export default Home;
