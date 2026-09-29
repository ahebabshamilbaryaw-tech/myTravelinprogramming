import logo from '../assets/logo.png';
import { FiSearch, FiUser } from "react-icons/fi";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
      <div><img src={logo} alt="Dwello"className="w-28"/> </div>
      <div className="flex items-center gap-10">
        <a href="#" className="text-gray-800 hover:text-black">  Home</a>
        <a href="#" className="text-gray-800 hover:text-black"> Service</a>
        <a href="#" className="text-gray-800 hover:text-black">  Agents</a>
        <a href="#" className="text-gray-800 hover:text-black"> Contact</a>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-2xl"> <FiSearch /> </button>
        <button className="text-2xl"><FiUser /></button>
        <button className="rounded-lg bg-black px-6 py-3 text-white"> Sign Up </button>
      </div>
    </nav>)
}
export default Navbar