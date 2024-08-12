// import Mantenimiento from "./Mantenimiento";
// import Parking from "./Parking";
// import Tarjetas from "./Tarjetas";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TarjetaPage from "../pages/TarjetaPage";
import ParkingPage from "../pages/ParkingPage";
import MantenimientoPage from "../pages/MantenimientoPage";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import { useState } from "react";

const Main = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleMenuClick = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };
  return (
    <main className="w-screen h-screen ">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home onClose={closeModal} openModal={handleMenuClick} />}
          />
          <Route path="/tarjetas" element={<TarjetaPage />} />
          <Route path="/parking" element={<ParkingPage />} />
          <Route
            path="/mantenimiento"
            element={
              <MantenimientoPage
                onClose={closeModal}
                openModal={handleMenuClick}
              />
            }
          />
        </Routes>
      </Router>
      <Footer />
      {modalContent && (
        <Modal
          content={modalContent}
          openModal={handleMenuClick}
          onClose={closeModal}
        />
      )}
    </main>
  );
};
export default Main;
