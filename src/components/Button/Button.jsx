import { useState } from "react";
import Modal from "react-modal";
import "./Button.css";
import PropTypes from 'prop-types';

// Modal'ın render edileceği uygulama elemanını belirtelim
Modal.setAppElement("#root");

const Button = ({ setData }) => {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSave() {
    // Yeni veriyi kaydetmek için setData fonksiyonunu kullanalım
    setData((prevData) => [
      ...prevData,
      { link: link, name: name, description: description },
    ]);
    closeModal();
    // State'leri sıfırlayalım
    setLink("");
    setName("");
    setDescription("");
  }

  return (
    <div>
      {/* Modal'ı açmak için kullanılacak buton */}
      <button className="button" onClick={openModal}>
        <span>Yeni Hesap Ekle</span>
      </button>
      
      {/* Modal bileşeni */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <button className="close" onClick={closeModal}>
          X
        </button>
        <span>Sosyal Medya Linki</span>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span>Sosyal Medya Adı</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Açıklama</span>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={closeModal}>Vazgeç</button>
          <button onClick={handleSave}>Kaydet</button>
        </div>
      </Modal>
    </div>
  );
};

// `setData` prop'unun PropTypes doğrulaması
Button.propTypes = {
  setData: PropTypes.func.isRequired,
};
export default Button;
