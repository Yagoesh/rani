import axios from "axios";
import React, { useEffect, useState } from "react";
import TarjetaForm from "./TarjetaForm";
import { dateFormat } from "../api/dateFormat";
import toast, { Toaster } from "react-hot-toast";
import { formatDate } from "../api/formatDate";

function Tarjetas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allTarjetas, setAllTarjetas] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getAllTarjetasApi = async () => {
    try {
      const resp = await axios.get(`http://localhost:4000/tarjetas/all`);
      setAllTarjetas(resp.data.data.tarjetas);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllTarjetasApi();
  }, [isModalOpen]);
  const handleDevuelto = async (tarjetaNumero) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/tarjetas/modify`,
        {
          tarjetaNumero,
        }
      );
      toast.success(
        response.data.message || "La tarjeta se ha devuelto correctamente"
      );
      getAllTarjetasApi();
    } catch (error) {
      console.log(error.message);
      toast.error(
        error.response?.data?.message || "Error al devolver la tarjeta"
      );
    }
  };

  let devoluDate;

  return (
    <div className="text-center  ">
      <Toaster />
      <h2 className="text-2xl mb-4">Tarjetas</h2>
      <div className="max-h-[400px]  min-h-[400px] overflow-auto p-1">
        <table className="border-collapse table-fixed overflow-auto m-5">
          <tr className=" bg-gray-100">
            <th className=" w-2/6  ">Nombre</th>
            <th className="    ">NºTarjeta</th>
            <th className=" w-1/6">Fecha Entrega</th>
            <th className=" w-1/6 ">Fecha Devolución</th>
            <th className=" w-1/6">Estado</th>
            <th className=" w-1/6">Acción</th>
          </tr>
          <tbody>
            {allTarjetas
              .sort(
                (a, b) => new Date(a.fechaEntrega) - new Date(b.fechaEntrega)
              )
              .map((tarjeta) => {
                const entregaDate = dateFormat(tarjeta.fechaEntrega);
                const formDate = formatDate(entregaDate);
                tarjeta.fechaDevolucion
                  ? (devoluDate = formatDate(
                      dateFormat(tarjeta.fechaDevolucion)
                    ))
                  : (devoluDate = "");
                return (
                  <tr
                    className="p-2 border-t border-gray-300 text-sm"
                    key={tarjeta.idUsoTarjeta}
                  >
                    <td className="p-2">{tarjeta.nombre} </td>
                    <td className="p-2">{tarjeta.tarjetaNumero} </td>
                    <td className="p-2">{formDate}</td>
                    <td className="p-2">{devoluDate} </td>
                    <td className="p-2">{tarjeta.estado} </td>
                    <td className="p-2 ">
                      {tarjeta.estado === "entregado" && (
                        <button
                          className="bg-red-200 rounded p-1"
                          onClick={() => handleDevuelto(tarjeta.tarjetaNumero)}
                        >
                          Devuelto
                        </button>
                      )}
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
          onClick={() => {
            openModal();
          }}
        >
          +
        </button>
      </div>

      <TarjetaForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Tarjetas;
