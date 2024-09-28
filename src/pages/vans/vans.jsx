import { useEffect } from 'react';
import styles from './Vans.module.css';
import { useState } from 'react';

const Card = (props) => {
  return (
    <li className={styles.card}>
      <img className={styles.image} src={props.url} />
      <div className={styles["van-info"]}>
        <h2 className={styles["van-title"]}>{props.name}</h2>
        <p className={styles['van-pricing']}>{`$${props.price}/day`}</p>
      </div>
    </li>
  );
};

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans').then(response => response.json())
      .then(json => {
        const cards = json.vans.map(van =>
          <Card
            name={van.name}
            url={van.imageUrl}
            price={van.price}
            key={van.id}
          />);
        setVans(cards);
      });
  }, []);

  return (
    <div className="page" id="vans-page">
      <h1 className={styles.header}>Explore our van options</h1>
      <div className="filters">Filters</div>
      <div className={styles["list-container"]}>
        <ul className={styles.list}>
          {vans}
        </ul>
      </div>
    </div>
  );
};

export default Vans;
