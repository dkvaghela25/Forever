import Card from '../../Components/CardComponent/Card';
import './HomePage.css';
import LatestImage from './header_img.png';
import ExchangeIcon from './exchange_icon.svg'
import QualityIcon from './quality_icon.svg'
import SupportIcon from './support_img.svg'
import Feature from '../../Components/FeatureComponent/Feature';
import SubscribeForm from '../../Components/SubscribeForm/SubscribeForm';
import Collections from '../../assets/Collections/Collections';

function HomePage() { 

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
          {Collections.slice(0,10).map((item) => (
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
          {Collections.slice(0,5).map((item) => (
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

      <SubscribeForm />
      
    </div>
  );
}

export default HomePage;

