import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function JomarForm({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();
  if (!isOpen) {
    return null;
  } // Verifica que isOpen esté definido correctamente al llamar a este componente

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/jomar/insert`,
        data
      );
      if (response.data.status === "Ok" || response.data.status === 200) {
        toast.success(
          response.data.message || "Incidencia agregada correctamente",
          { duration: 2000 }
        );

        setTimeout(() => {
          onClose();
        }, 100);
      }
      reset();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error al agregar la incidencia"
      );
      console.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)} // Asegúrate de que el onSubmit esté vinculado correctamente
        className="bg-white p-6 rounded shadow-lg w-96"
      >
        <h3 className="text-lg font-semibold mb-4">Formulario de Jomar</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Trabajo realizado:</label>
          <input
            {...register("servicio", { required: "Campo requerido" })}
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Servicio..."
          />
          {errors.servicio && <p>{errors.servicio.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Observaciones:</label>
          <input
            {...register("observaciones")}
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Observaciones..."
          />
          {errors.observaciones && <p>{errors.observaciones.message}</p>}
        </div>

        <div className="flex justify-end">
          <button
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

export default JomarForm;
