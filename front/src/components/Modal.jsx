import Tarjetas from "./Tarjetas";
import Parking from "./Parking";
import Mantenimiento from "./Mantenimiento";
import IlunionModal from "./IlunionModal";
import AquaServiceModal from "./AquaServiceModal";

function Modal({ onClose, content, openModal }) {
  let modalContent;

  switch (content) {
    case "Tarjetas":
      modalContent = <Tarjetas />;
      break;
    case "Parking":
      modalContent = <Parking />;
      break;
    case "Mantenimiento":
      modalContent = <Mantenimiento onClose={onClose} openModal={openModal} />;
      break;
    case "IlunionModal":
      modalContent = <IlunionModal />;
      break;
    case "AquaService":
      modalContent = <AquaServiceModal />;
      break;
    default:
      modalContent = null;
  }

  return (
    <div className="fixed h-full inset-0 m-auto flex items-center align-center justify-center bg-black h-1/4  bg-opacity-50">
      <div className="w-4/5 h-4/5  items-center bg-white p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {modalContent}
      </div>
    </div>
  );
}

export default Modal;
