function Mantenimiento({ onClose, openModal }) {
  const handleIlunion = () => {
    onClose("Mantenimiento");
    openModal("IlunionModal");
  };
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Mantenimiento</h2>
      <button
        onClick={handleIlunion}
        className="bg-green-500  text-white py-2 px-4 rounded mr-2 hover:bg-red-600"
      >
        Ilunion
      </button>
      <button className="bg-green-500  text-white py-2 px-4 rounded hover:bg-red-600">
        AquaService
      </button>
    </div>
  );
}

export default Mantenimiento;
