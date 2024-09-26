import "./index.css";

const Home = () => {
  return (
    <div className="page" id="home-page">
      <div className="hero">
        <h1 className="header" id="hero-header">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="description" id="hero-description">
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>
        <button className="btn hero-btn">Find your van</button>
      </div>
    </div>
  );
};
export default Home;
