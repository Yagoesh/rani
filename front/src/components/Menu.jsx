import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="flex items-center justify-between gap-1">
      <NavLink
        to="/tarjetas"
        className="  text-white font-bold bg-primary hover:bg-slate-600 px-4 py-1 rounded-md duration-500"
      >
        Tarjetas
      </NavLink>

      <NavLink
        to="/parking"
        className="text-white font-bold bg-primary hover:bg-slate-600 px-4 py-1 rounded-md duration-500"
      >
        Parking
      </NavLink>
      <NavLink
        to="/mantenimiento"
        className="text-white font-bold bg-primary hover:bg-slate-600 px-4 py-1 rounded-md duration-500"
      >
        Mantenimiento
      </NavLink>
    </nav>
  );
}

export default Menu;
