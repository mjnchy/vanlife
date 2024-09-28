import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="page" id="home-page">
      <div className={styles.hero}>
        <h2 className={styles.header} id="hero-header">
          You got the travel plans, we got the travel vans.
        </h2>
        <p className={styles.description} id="hero-description">
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>
        <button className='btn'>Find your van</button>
      </div>
    </div>
  );
};
export default Home;
