import SubscribeForm from "../../Components/SubscribeForm/SubscribeForm";
import "./ContactusPage.css";
import ContactImage from "./contact_img.png";


function ContactsPage() {
  return (
    <div className="ContactusPage">
      <div className="heading">
        CONTACT &nbsp; <b>US</b> <hr />
      </div>

      <div className="contact-details">
        <div>
          <img src={ContactImage} alt="" />
        </div>
        <div className="contact-info">
          <div className="heading">Our Store</div>
          <div>54709 Willms Station Suite 350, Washington, USA</div>
          <div>Tel: (415) 555‑0132</div>
          <div>Email: greatstackdev@gmail.com</div>
          <div className="heading">Careers at Forever</div>
          <div>Learn more about our teams and job openings.</div>
          <button>Explore Jobs</button>
        </div>
      </div>

      < SubscribeForm />
            
    </div>
  );
}

export default ContactsPage;
