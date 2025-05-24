import { useState } from "react";
import "./Header.css";
import Logo from "./logo.png";
import ProfileIcon from "./profile-icon.svg";
import SearchIcon from "./search icon.svg";
import ShoppingIcon from "./shopping-icon.svg";
import MenuIcon from "./menu_icon.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <img className="Logo" src={Logo} alt="" />
        <nav>
          <div className={`Links ${menuOpen ? "open" : ""}`}>
            <div className="link">
              <a href="">HOME</a>
            </div>
            <div className="link">
              <a href="">COLLECTION</a>
              <hr className="collection" />
            </div>
            <div className="link">
              <a href="">ABOUT</a>
            </div>
            <div className="link">
              <a href="">CONTACT</a>
            </div>
          </div>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <img src={MenuIcon} alt="Menu" style={{ width: 32, height: 32 }} />
          </button>
        </nav>
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
