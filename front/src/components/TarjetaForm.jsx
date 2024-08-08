import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TarjetaForm({ isOpen, onClose }) {
  const [tarjetasDisponibles, setTarjetasDisponibles] = useState([]);

  const getTarjetasDisponibles = async () => {
    try {
      const tarjetas = await axios.get(
        `http://localhost:4000/tarjetas/disponibles`
      );
      console.log(tarjetas);
      setTarjetasDisponibles(tarjetas.data.data.tarjetas);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTarjetasDisponibles();
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();

  if (!isOpen) {
    return null;
  }

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/tarjetas/insert`,
        data
      );

      if (response.data.status === "OK" || response.data.status === 200) {
        toast.success("Tarjeta entregada correctamente");
        reset();
        return;
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error al entregar la tarjeta"
      );
    }
    getTarjetasDisponibles();

    reset();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <ToastContainer autoClose={1500} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-lg w-96"
      >
        <h3 className="text-lg font-semibold mb-4">Formulario de Tarjeta</h3>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nombre Completo</label>
          <input
            {...register("nombre", { required: "Nombre es requerido" })}
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Nombre Completo"
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Departamento</label>
          <input
            {...register("departamento", {
              required: "Departamento es requerido",
            })}
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Departamento"
          />
          {errors.departamento && <p>{errors.departamento.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Número de Tarjeta</label>
          <select
            {...register("tarjetaNumero", {
              required: "Número de Tarjeta es requerido",
              pattern: {
                value: /^\d+$/,
                message: "Número de Tarjeta debe ser numérico",
              },
            })}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Número de Tarjeta"
          >
            {tarjetasDisponibles.map((tarjeta) => (
              <option key={tarjeta.tarjetaNumero} value={tarjeta.tarjetaNumero}>
                {tarjeta.tarjetaNumero}
              </option>
            ))}
          </select>
          {errors.tarjetaNumero && <p>{errors.tarjetaNumero.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Responsable</label>
          <input
            {...register("responsable", {
              required: "Responsable es requerido",
            })}
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Responsable"
          />
          {errors.responsable && <p>{errors.responsable.message}</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600"
          >
            +
          </button>
        </div>
        <div className="flex justify-start">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default TarjetaForm;
