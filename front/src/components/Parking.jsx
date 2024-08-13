import axios from "axios";
import { useEffect, useState } from "react";
import ParkingForm from "./ParkingForm";
import { dateFormat } from "../api/dateFormat";
import { Toaster } from "react-hot-toast";
import { formatDate } from "../api/formatDate";

function Parking() {
  const [isParkingModalOpen, setIsParkingModalOpen] = useState(false);
  const [allParkings, setAllParkings] = useState([]);

  const openModal = () => setIsParkingModalOpen(true);
  const closeModal = () => setIsParkingModalOpen(false);

  const getAllParkingsApi = async () => {
    try {
      const resp = await axios.get(`http://localhost:4000/parking/all`);
      setAllParkings(resp.data.data.parkings);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllParkingsApi();
  }, [isParkingModalOpen]);
  const today = new Date().toISOString();

  return (
    <div className="text-center">
      <Toaster />
      <h2 className="text-2xl mb-4">Parking</h2>

      <div className="max-h-[400px] min-h-[400px]  overflow-auto ">
        <table className="border-collapse table-fixed  overflow-fit">
          <tr className=" bg-gray-100">
            <th className=" w-1/5">Fecha </th>
            <th className="  ">Nombre</th>
            <th className="max-w-[1/5]">E-mail</th>
            <th className=" ">Plaza</th>
            <th className=" ">Reserva</th>
            <th className="">Estado</th>
          </tr>
          <tbody>
            {allParkings
              .sort(
                (a, b) => new Date(a.fechaReserva) - new Date(b.fechaReserva)
              )

              .map((parking) => {
                const date = formatDate(dateFormat(parking.fecha));

                const reservaDate = formatDate(
                  dateFormat(parking.fechaReserva)
                );
                return (
                  <tr
                    className="p-2 border-t border-gray-300 text-sm"
                    key={parking.idUsoParking}
                  >
                    <td className="p-2">{reservaDate}</td>
                    <td className="p-2">{parking.nombre} </td>
                    <td className="p-2">{parking.email} </td>
                    <td className="p-2">{parking.plaza} </td>
                    <td className="p-2">{date}</td>
                    <td className="p-2">
                      {parking.fecha.slice(0, 10) > today.slice(0, 10)
                        ? "Reservado "
                        : parking.fecha.slice(0, 10) < today.slice(0, 10)
                        ? "Finalizado"
                        : parking.fecha.slice(0, 10) === today.slice(0, 10)
                        ? "Aparcado"
                        : ""}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600"
          onClick={openModal}
        >
          +
        </button>
      </div>
      <div>
        <ParkingForm isOpen={isParkingModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Parking;
