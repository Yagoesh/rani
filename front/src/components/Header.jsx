import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#003566] text-white max-h-[120px] p-4 flex flex-col items-center">
      <h1 onClick={() => navigate("/")} className="titulo cursor-pointer">
        CSC Rani
      </h1>
      <Menu />
    </header>
  );
};
export default Header;
