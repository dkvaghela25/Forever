import "./Header.css";
import Logo from "./logo.png";
import ProfileIcon from "./profile-icon.svg";
import SearchIcon from "./search icon.svg";
import ShoppingIcon from "./shopping-icon.svg";

function Header() {
  return (
    <div>
      <header>
        <img className="Logo" src={Logo} alt="" />
        <div className="Links">
          <div className="link">
            <a href="">HOME</a>
          </div>
          <div className="link">
            <a href="">COLLECTION</a>
            <hr className="collection"/>
          </div>
          <div className="link">
            <a href="">ABOUT</a>
          </div>
          <div className="link">
            <a href="">CONTACT</a>
          </div>
        </div>
        <div className="icons">
          <img src={ProfileIcon} alt="" />
          <img src={SearchIcon} alt="" />
          <img src={ShoppingIcon} alt="" />
        </div>
      </header>
    </div>
  );
}

export default Header;
