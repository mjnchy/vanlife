import { Link, useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const van = JSON.parse(localStorage.getItem('vans'))[parseInt(params.id) - 1];

  return (
    <div className='page' id='details-page'>
      <img className='image' src={van.imageUrl} />
      <h3 className={`van-type ${van.type}`}>{van.type[0].toUpperCase() + van.type.slice(1)}</h3>
      <h2 className='van-title'>{van.name}</h2>
      <h3 className='van-price'>{van.price}/day</h3>
      <p className='van-description'>{van.description}</p>
      <Link className='link btn'>Rent this van</Link>
    </div>
  );
};

export default Details;
