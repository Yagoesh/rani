const Mantenimiento = ({ onClose, openModal }) => {
  const handleIlunion = () => {
    onClose("Mantenimiento");
    openModal("IlunionModal");
  };
  const handleAquaService = () => {
    onClose("Mantenimiento");
    openModal("AquaService");
  };
  return (
    <div className="text-center w-full">
      <h2 className="text-2xl mb-4">Mantenimiento</h2>
      <button
        onClick={handleIlunion}
        className="bg-green-500  text-white py-2 px-4 rounded mr-2 hover:bg-red-600"
      >
        Ilunion
      </button>

      <button
        onClick={handleAquaService}
        className="bg-green-500  text-white py-2 px-4 rounded hover:bg-red-600"
      >
        AquaService
      </button>
    </div>
  );
};

export default Mantenimiento;
