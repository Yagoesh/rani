import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-bl from-sky-900 to-indigo-400 text-white max-h-[85px]  p-4 flex flex-rows justify-between items-center align-center">
      <div
        onClick={() => navigate("/")}
        className="flex gap-5 cursor-pointer items-center m-8"
      >
        <img
          src="/CSCRani.png"
          alt="Logo CSC"
          className="w-16 h-16 rounded-full border white-shadow p-2"
        />
        <h1 className="titulo">CSC Rani</h1>
      </div>
      <div className="m-8">
        <Menu />
      </div>
    </header>
  );
};
export default Header;
