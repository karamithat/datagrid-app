import "./Header.css";
import Logo from "../../assets/logo.png";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaBehanceSquare,
  FaLinkedin,
} from "react-icons/fa";


const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="center">
        <a href="#" className="link">
          Hakkımızda
        </a>
        <a href="#" className="link">
          Jüri - Yarışma Yazılımı
        </a>
        <a href="#" className="link">
          Word Ninja
        </a>
        <a href="#" className="link">
          Word Pyramids
        </a>
      </div>
      <div className="right">
        <span className="social-media">
        <FaYoutubeSquare className="icon" />
        </span>
        <span className="social-media">
        <FaInstagramSquare className="icon" />
        </span>
        <span className="social-media">
        <FaBehanceSquare className="icon" />
        </span>
        <span className="social-media">
        <FaLinkedin className="icon" />
        </span>
        
        
      </div>
    </header>
  );
};

export default Header;
