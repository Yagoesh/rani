import Mantenimiento from "../components/Mantenimiento";

function MantenimientoPage({ onClose, openModal }) {
  return (
    <div className="flex justify-between gap-[20px] m-10  h-[68vh]">
      <Mantenimiento onClose={onClose} openModal={openModal} />
    </div>
  );
}
export default MantenimientoPage;
