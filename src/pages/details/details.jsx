import { Link, useParams } from 'react-router-dom';
import styles from './Details.module.css';
import { useEffect, useState } from 'react';

const Details = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`).then(response => response.json())
      .then(json => setVan(<div className='van-expanded'>
        <img className={styles.image} src={json.vans.imageUrl} />
        <div className={styles.type}>{json.vans.type[0].toUpperCase() + json.vans.type.slice(1)}</div>
        <h1 className={styles.header}>{json.vans.name}</h1>
        <div className='pricing'>
          <h2 className={styles.pricing}>{`$${json.vans.price}`}</h2>
          <span className={styles.time}>/day</span>
        </div>
        <p className={styles.description}>{json.vans.description}</p>
      </div>))
  }, [params]);

  return (
    <div className='page' id='details-page'>
      <Link to={'/vans'}>Back to all vans</Link>
      {van}
      <button className='btn'>Rent this van</button>
    </div>
  )
};

export default Details;
