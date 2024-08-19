import IlunionModal from "./IlunionModal";
import AquaServiceModal from "./AquaServiceModal";
import IncidenciasModal from "./Incidencias";
import JomarModal from "./JomarModal";

function Modal({ onClose, content }) {
  let modalContent;

  switch (content) {
    case "IlunionModal":
      modalContent = <IlunionModal />;
      break;
    case "AquaService":
      modalContent = <AquaServiceModal />;
      break;
    case "Incidencias":
      modalContent = <IncidenciasModal />;
      break;
    case "Jomar":
      modalContent = <JomarModal />;
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
