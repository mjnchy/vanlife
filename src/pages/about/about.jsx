import styles from "./About.module.css";
import image from "../../assets/about-hero.png";

const About = () => {
  return (
    <div className="page" id="about-page">
      <img className={styles.img} src={image} />
      <div className={styles.hero}>
        <h2 className={styles.header} id="about-hero-header">
          Don't squeeze in a sedan when you could relax in a van.
        </h2>

        <div className={styles["description-container"]}>
          <p className={styles.description}>
            Out mission is to enliven your road trip with the perfect travel
            van rental. Our vans are recertified before each trip to ensure
            your travel plans to go off without a hitch.
          </p>
          <p className={styles["new-line"]}>(Hitch costs extra)</p>

          <p className={styles.description}>
            Our team is full of vanlife enthusiasts who know firshand the
            magic of touring the world on 4 wheels.
          </p>
        </div>

        <div className={styles.highlight}>
          <div className={styles['highlight-text']}>
            Your destination is waiting.
          </div>
          <div className={styles['highlight-text']}>
            Your van is ready.
          </div>
          <button className={`btn ${styles.btn}`}>Explore our vans</button>
        </div>
      </div>
    </div>
  );
};

export default About;
