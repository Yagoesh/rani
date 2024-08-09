import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Mantenimiento from "./components/Mantenimiento";
import Tarjetas from "./components/Tarjetas";
import Parking from "./components/Parking";
import Footer from "./components/Footer";

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
      <header className="bg-gray-800 text-white max-h-[80px] p-4 flex flex-col items-center">
        <h1 className="titulo">CSC Rani</h1>
        <Menu onMenuClick={handleMenuClick} />
      </header>
      <body>
        <div className="flex justify-between gap-[20px] m-10  min-h-[300px]">
          <div className="bg-custom-gradient2 rounded-29px shadow-custom2 p-6  m-15  min-w-[400px] min-h-[500px]  hover:bg-custom-gradient3">
            <Tarjetas />
            {/* <h2 className="text-2xl mb-4">Tarjetas</h2> */}
          </div>
          <div className="bg-custom-gradient2 rounded-29px shadow-custom2 p-6 m-15 min-w-[350px] min-h-[500px] hover:bg-custom-gradient3">
            {/* <h2 className="text-2xl mb-4">Parking</h2> */}
            <Parking />
          </div>
          <div className="bg-custom-gradient2 rounded-29px shadow-custom2 p-6 min-w-[400px] min-h-[500px]  hover:bg-custom-gradient3">
            <Mantenimiento onClose={closeModal} openModal={handleMenuClick} />
          </div>
        </div>
      </body>
      <Footer />
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
