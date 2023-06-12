import "./Header.css";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaBehanceSquare,
  FaLinkedin,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "react-modal";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <header className="header">
      <div className="left">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <nav className="center">
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
      </nav>
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
      <div className="hamburger-menu">
        <GiHamburgerMenu onClick={handleOpenModal} />
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <button onClick={handleCloseModal} className="close-modal">
          X
        </button>

        <nav className="center modal-content">
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
        </nav>
        <div className="right modal-content">
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
      </Modal>
    </header>
  );
};

export default Header;
