import { useState } from "react";
import "./Header.css";
import Logo from "./logo.png";
import ProfileIcon from "./profile-icon.svg";
import SearchIcon from "./search icon.svg";
import ShoppingIcon from "./shopping-icon.svg";
import MenuIcon from "./menu_icon.svg";
import { useNavigate , Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <div onClick={() => navigate("/")} className="logo-container">
          <img className="Logo" src={Logo} alt="" />
        </div>
        <nav>
          <div className={`Links ${menuOpen ? "open" : ""}`}>
            <div className="link">
              <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            </div>
            <div className="link">
              <Link to="/collections" onClick={() => setMenuOpen(false)}>COLLECTION</Link>
            </div>
            <div className="link">
              <Link to="/" onClick={() => setMenuOpen(false)}>ABOUT</Link>
            </div>
            <div className="link">
              <Link to="/" onClick={() => setMenuOpen(false)}>CONTACT</Link>
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
