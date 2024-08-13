import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ParkingForm({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm();
  const [plazasDisponibles, setPlazasDisponibles] = useState([]);
  if (!isOpen) return null;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/parking/insert`,
        data
      );

      setPlazasDisponibles([]);
      if (response.data.status === "Ok" || response.data.status === 200) {
        toast.success(
          response.data.message || "Plaza reservada correctamente",
          { duration: 2000 }
        );
        toast.success("Envio de correo informativo");
        setTimeout(() => {
          onClose();
        }, 100);
      }
      reset();
    } catch (error) {
      console.log(error.message);
      toast.error(
        error.response?.data?.message || "Error al reservar la plaza"
      );
    }
  };
  const getDisponibles = async (fecha) => {
    const disponibles = await axios.get(
      `http://localhost:4000/parking/disponibles/${fecha}`
    );
    setPlazasDisponibles(disponibles.data.data.parkings);
  };

  const handleDateChange = async (e) => {
    try {
      const fecha = e.target.value;
      getDisponibles(fecha);
    } catch (error) {
      console.error(error);
    }
  };

  const validateDate = (value) => {
    const today = new Date().toISOString().split("T")[0];
    return (
      new Date(value) >= new Date(today) ||
      "La fecha debe de ser de hoy o posterior"
    );
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)} // Asegúrate de que el onSubmit esté vinculado correctamente
        className="bg-white p-6 rounded shadow-lg w-96"
      >
        <h3 className="text-lg font-semibold mb-4">Formulario de Tarjeta</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Fecha</label>
          <input
            {...register("fecha", {
              required: "Fecha de reserva es obligatoria",
              validate: validateDate,
            })}
            onChange={(e) => {
              handleDateChange(e);
              setValue("fecha", e.target.value);
            }}
            type="date"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.fecha && <p>{errors.fecha.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nombre Completo</label>
          <input
            {...register("nombre", { required: "Nombre es requerido" })}
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Nombre Completo..."
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            {...register("email", {
              required: "email es requerido",
            })}
            type="email"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Email..."
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Plaza Nº</label>
          <select
            {...register("plaza", {
              required: "Número de plaza es requerido",
              pattern: {
                value: /^\d+$/,
                message: "Número de Tarjeta debe ser numérico",
              },
            })}
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Nº Plaza..."
          >
            {plazasDisponibles.map((plaza) => (
              <option>{plaza.plaza} </option>
            ))}
          </select>
          {errors.plaza && <p>{errors.plaza.message}</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className="bg-green-500 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600"
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

export default ParkingForm;
