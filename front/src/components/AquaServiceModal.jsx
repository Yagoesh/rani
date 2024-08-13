import axios from "axios";
import { useEffect, useState } from "react";
import AquaServiceForm from "./AquaServiceForm";
import { dateFormat } from "../api/dateFormat";
import { Toaster } from "react-hot-toast";

function AquaServiceModal() {
  const [allAquaService, setAllAquaService] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAllAquaserviceApi = async () => {
    const data = await axios.get(`http://localhost:4000/aquaService/all`);
    setAllAquaService(data.data.data.result);
  };

  useEffect(() => {
    getAllAquaserviceApi();
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="text-center">
      <Toaster />
      <h2 className="text-2xl mb-4">AquaService</h2>
      <div className="max-h-[400px] min-h-[400px]  overflow-auto p-4">
        <table className="border-collapse table-fixed w-full overflow-auto ">
          <tr className=" bg-gray-100">
            <th className=" w-1/3">Fecha </th>
            <th className="w-1/2">Servicio</th>
            <th className=" w-1/2 ">Observaciones</th>
          </tr>
          <tbody>
            {allAquaService
              .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
              .map((caso) => {
                const date = dateFormat(caso.fecha);

                return (
                  <tr className="p-2 border-t border-gray-300" key={caso.fecha}>
                    <td className="p-2">{date} </td>
                    <td className="p-2">{caso.servicio} </td>
                    <td className="p-2">{caso.observaciones} </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={openModal}
          className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600"
        >
          +
        </button>
      </div>
      <AquaServiceForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AquaServiceModal;
