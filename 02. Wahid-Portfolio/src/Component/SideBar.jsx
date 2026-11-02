import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiLayers,
  FiCreditCard,
  FiUsers,
  FiFileText,
  FiMessageCircle,
} from "react-icons/fi";

function SideBar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-[#302f55] flex flex-col items-center border-r border-gray-400">
      <div className="text-white text-3xl font-bold py-8">
        W<span className="text-red-500">.</span>
      </div>
      <nav className="flex flex-col items-center gap-7">
        <button className="text-cyan-400 text-2xl">
          <FiHome />
        </button>
        <button className="text-white text-2xl hover:text-cyan-400 transition">
          <FiUser />
        </button>
        <button className="text-white text-2xl hover:text-cyan-400 transition">
          <FiBriefcase />
        </button>
        <button className="text-white text-2xl hover:text-cyan-400 transition">
          <FiBookOpen />
        </button>
        <button className="text-white text-2xl hover:text-cyan-400 transition">
          <FiLayers />
        </button>
        <button className="text-white text-2xl hover:text-cyan-400 transition">
          <FiCreditCard />
        </button>
        <button className="text-white text-2xl hover:text-cyan-400 transition">
          <FiUsers />
        </button>
        <button className="text-white text-2xl hover:text-cyan-400 transition">
          <FiFileText />
        </button>
        <button className="text-white text-2xl hover:text-cyan-400 transition">
          <FiMessageCircle />
        </button>

      </nav>

    </aside>
  );
}

export default SideBar;