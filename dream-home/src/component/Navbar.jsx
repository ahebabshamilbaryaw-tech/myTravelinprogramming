function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold">
          Dwello
        </h1>
      </div>

      {/* Links */}
      <div className="flex gap-8">
        <a href="#" className="text-gray-700">Home</a>
        <a href="#" className="text-gray-700">Service</a>
        <a href="#" className="text-gray-700">Agents</a>
        <a href="#" className="text-gray-700">Contact</a>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <button className="text-xl">
          🔍
        </button>

        {/* User */}
        <button className="text-xl">
          👤
        </button>

        {/* Sign Up */}
        <button className="px-5 py-2 rounded-lg bg-black text-white">
          Sign Up
        </button>

      </div>

    </nav>
  )
}

export default Navbar