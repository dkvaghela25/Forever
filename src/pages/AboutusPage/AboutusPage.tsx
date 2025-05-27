import "./AboutusPage.css";
import AboutImage from ".//about_img.png";
import SubscribeForm from "../../Components/SubscribeForm/SubscribeForm";

function AboutusPage() {
  return (
    <div className="AboutusPage">
      
      <div className="heading">
        About &nbsp; <b>US</b> <hr />
      </div>
      
      <div className="about-us">
        <div>
          <img src={AboutImage} alt="" />
        </div>
        <div>
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div style={{alignSelf:"baseline"}} className="heading">
        WHY &nbsp; <b>CHOOSE US</b> <hr />
      </div>

      <div className="plus-points">
        <div className="point">
          <b>Quality Assurance:</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="point">
          <b>Convenience: </b>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="point">
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <SubscribeForm />
      
    </div>
  );
}

export default AboutusPage;
