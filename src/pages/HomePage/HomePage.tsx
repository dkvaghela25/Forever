import './HomePage.css';
import LatestImage from './header_img.png';

function HomePage() {
  return (
    <div className="HomePage">

      <div className="latest-arrivals">
        <div className="latest-arrivals-text">
          <p>OUR BESTSELLERS</p>
          <h2>Latest Arrivals</h2>
          <a href="#">SHOP NOW</a>
        </div>
        <div className="latest-arrivals-image">
          <img src={LatestImage} alt="Latest Arrivals" />
        </div>
      </div>
    
      <div className="latest-collections">
        <div className="heading">Latest Collections</div>
      </div>
    </div>
  );
}

export default HomePage;

