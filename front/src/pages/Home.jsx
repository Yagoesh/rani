import { useNavigate } from "react-router-dom";
import Mantenimiento from "../components/Mantenimiento";
import Parking from "../components/Parking";
import Tarjetas from "../components/Tarjetas";

function Home({ onClose, openModal }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between gap-[15px]  m-10   h-[70vh]">
      <div
        className="bg-custom-gradient2 rounded-29px shadow-custom2 p-6  m-15   min-h-[500px]  hover:bg-custom-gradient3"
        onClick={() => navigate("/tarjetas")}
      >
        <Tarjetas />
      </div>
      <div
        className="bg-custom-gradient2 rounded-29px shadow-custom2  p-6 m-15   min-h-[500px] hover:bg-custom-gradient3"
        onClick={() => navigate("/parking")}
      >
        <Parking />
      </div>
      <div
        className="bg-custom-gradient2 rounded-29px shadow-custom2 p-6 m-15  min-h-[500px]  hover:bg-custom-gradient3"
        onClick={() => navigate("/mantenimiento")}
      >
        <Mantenimiento onClose={onClose} openModal={openModal} />
      </div>
    </div>
  );
}
export default Home;
