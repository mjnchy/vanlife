import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './vans.module.css';

const Tile = (arr) => {
  return arr.map(item =>
    <li className='tile' key={item.id}>
      <Link className='link' id={item.id} to={`/vans/${item.id}`}>
        <img className={`image ${styles.image}`} src={item.imageUrl} />
        <div className={styles['van-info']}>
          <div>
            <h3 className='van-title'>{item.name}</h3>
            <h3 className={`van-type ${item.type}`}>{item.type[0].toUpperCase() + item.type.slice(1)}</h3>
          </div>
          <p className={styles['van-price']}>${item.price}<br /> <span>/day</span></p>
        </div>
      </Link>
    </li>
  );
};

const fetchVans = async (api) => {
  const response = await fetch(api);
  const json = await response.json();
  const vans = await json.vans;

  return vans;
};

const Vans = () => {
  const [vans, setVans] = useState(localStorage.vans ? localStorage.vans : []);

  useEffect(() => {
    if (localStorage.getItem('vans')) {
      setVans(Tile(JSON.parse(localStorage.getItem('vans'))));
      fetchVans('/api/vans').then(vans => {
        const localVans = localStorage.getItem('vans');
        if (JSON.stringify('vans') == localVans) return;
        localStorage.setItem('vans', JSON.stringify(vans));
        setVans(Tile(vans));
      });
    } else {
      fetchVans('/api/vans').then(vans => {
        localStorage.setItem('vans', JSON.stringify(vans));
        setVans(Tile(vans));
      });
    };
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
