import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Modal from "./components/Modal";

function App() {
  const [modalContent, setModalContent] = useState(null);

  const handleMenuClick = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4 flex flex-col items-center">
        <h1 className="text-3xl mb-4">Conserjería</h1>
        <Menu onMenuClick={handleMenuClick} />
      </header>

      {modalContent && (
        <Modal
          content={modalContent}
          openModal={handleMenuClick}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
export default App;
