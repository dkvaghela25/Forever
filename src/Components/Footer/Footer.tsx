import './Footer.css'
import Logo from "../Header/logo.png";

function Footer() {
  return (
    <footer>
        <div className="main">
            <div className="logo"><img src={Logo} alt="" /></div>
            <div></div>
            <div className='heading'>COMPANY</div>
            <div className='heading'>GET IN TOUCH</div>
            <p className='lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div></div>
            <div className="Links">
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Delivery</a>
                <a href="">Privacy policy</a>
            </div>
            <div className="contacts">
                <div>+1-212-456-7890</div>
                <div>greatstackdev@gmail.com</div>
            </div>
        </div>
        <hr />
        <div className="copyright">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </div>
    </footer>
  )
}

export default Footer
