function Menu({ onMenuClick }) {
  return (
    <nav className="flex space-x-4">
      <button
        onClick={() => onMenuClick("Tarjetas")}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Tarjetas
      </button>
      <button
        onClick={() => onMenuClick("Parking")}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Parking
      </button>
      <button
        onClick={() => onMenuClick("Mantenimiento")}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Mantenimiento
      </button>
    </nav>
  );
}

export default Menu;
