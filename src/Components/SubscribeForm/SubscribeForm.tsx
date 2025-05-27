import './SubscribeForm.css';

function SubscribeForm() {
  return (
      <div className="SubscribeForm">
        <div className="heading">
          <b>Subscribe now & get 20% off</b>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
        <form action="">
          <input type="email" placeholder="Enter your email id" />
          <button>SUBSCRIBE</button>
        </form>
      </div>
  );
}

export default SubscribeForm;
