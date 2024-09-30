import { Link, useParams } from "react-router-dom";
import styles from './details.module.css';

const Details = () => {
  const params = useParams();
  const van = JSON.parse(localStorage.getItem('vans'))[parseInt(params.id) - 1];

  return (
    <div className='page' id='details-page'>
      <Link className={`link ${styles.link}`} to={'/vans'}><span class="arrow-left"></span>Back to all vans</Link>
      <img className={`image ${styles.image}`} src={van.imageUrl} />
      <h3 className={`van-type ${van.type} ${styles['van-type']}`}>{van.type[0].toUpperCase() + van.type.slice(1)}</h3>
      <h2 className={`van-title ${styles['van-title']}`}>{van.name}</h2>
      <h3 className={`van-price ${styles['van-price']}`}>${van.price}<span className={styles.time}>/day</span></h3>
      <p className='van-description'>{van.description}</p>
      <Link className='link btn'>Rent this van</Link>
    </div>
  );
};

export default Details;
