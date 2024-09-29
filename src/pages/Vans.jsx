import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './vans.module.css';

const Tile = (props) => {
  return (
    <li className='tile'>
      <Link className='link' id={props.id}>
        <img className={`image ${styles.image}`} src={props.image} />
        <div className={styles['van-info']}>
          <div>
            <h3 className='van-title'>{props.name}</h3>
            <h3 className={`van-type ${props.type}`}>{props.type[0].toUpperCase() + props.type.slice(1)}</h3>
          </div>
          <p className={styles['van-price']}>${props.price}<br /> <span>/day</span></p>
        </div>
      </Link>
    </li>
  )
}

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans').then(response => response.json())
      .then(json => {
        const newVans = json.vans.map(van =>
          <Tile name={van.name} type={van.type} price={van.price} image={van.imageUrl} key={van.id} id={van.id} />);
        setVans(newVans);
      })
  }, []);

  return (
    <div className={`page ${styles.page}`}>
      <h2 className={`header`}>Explore our van options</h2>
      <div className={`list-container`}>
        <ul className={`van-list ${styles['van-list']}`}>{vans}</ul>
      </div>
    </div>
  );
};

export default Vans;
