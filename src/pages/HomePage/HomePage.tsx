import Card from '../../Components/CardComponent/Card';
import './HomePage.css';
import LatestImage from './header_img.png';
import Image1 from './Rectangle 3608.png';
import Image2 from './Rectangle 3609.png';
import Image3 from './Rectangle 3619.png';
import Image4 from '../HomePage/p_img18.png'
import Image5 from '../HomePage/p_img19.png'
import ExchangeIcon from './exchange_icon.svg'
import QualityIcon from './quality_icon.svg'
import SupportIcon from './support_img.svg'
import Feature from '../../Components/FeatureComponent/Feature';

function HomePage() { 

  let LatestCollections = [
    {product_id: 1, image_url: Image1, title: 'Women Round Neck Cotton Top', price: 149},
    {product_id: 2, image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {product_id: 3, image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {product_id: 4, image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {product_id: 5, image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {product_id: 6, image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {product_id: 7, image_url: Image4, title: 'Women Round Neck Cotton Top', price: 149},
    {product_id: 8, image_url: Image5, title: 'Women Round Neck Cotton Top', price: 139},
    {product_id: 9, image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {product_id: 10, image_url: Image4, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    
  ]

  let Features = [
    {image_url: ExchangeIcon, feature: 'Easy Exchange Policy' , description: 'We offer hassle free  exchange policy'},
    {image_url: QualityIcon, feature: '7 Days Return Policy' , description: 'We provide 7 days free return policy '},
    {image_url: SupportIcon, feature: 'Best Customer Support' , description: 'We provide 24/7 customer support'},
  ]

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
        <div className="heading">Latest &nbsp; <b>Collections</b> <hr /></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        <div className="Cards">
          {LatestCollections.map((item) => (
            <Card
              id={item.product_id}
              image_url={item.image_url}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
      
      <div className="latest-collections">
        <div className="heading">Best &nbsp; <b>Seller</b> <hr /></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        <div className="Cards">
          {LatestCollections.slice(0,5).map((item) => (
            <Card
              id={item.product_id}
              image_url={item.image_url}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="features">
          {Features.map((item) => (
            <Feature image_url={item.image_url} feature={item.feature} description={item.description}/>
          ))}
      </div>

      <div className="subscribe-form">
          <div className='heading'><b>Subscribe now & get 20% off</b></div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <form action="">
            <input type="email" placeholder='Enter your email id'/>
            <button>SUBSCRIBE</button>
          </form>
      </div>
    </div>
  );
}

export default HomePage;

