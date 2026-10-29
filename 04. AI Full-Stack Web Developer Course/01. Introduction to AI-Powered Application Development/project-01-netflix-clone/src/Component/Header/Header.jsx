
import { useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  ChevronDown,
} from "lucide-react";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] bg-transparent py-4 backdrop-blur-[3px]">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-6 px-4 sm:px-6 lg:gap-10 lg:px-10">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            className="h-[30px] w-[100px] object-contain transition-opacity hover:opacity-80"
            src={logo}
            alt="Netflix logo"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden flex-1 items-center gap-5 lg:flex">
          <Link className="whitespace-nowrap text-sm font-medium text-[#f5f5f1] transition-colors hover:text-[#b3b3b0]" to="/">
            Home
          </Link>

          <Link className="whitespace-nowrap text-sm font-medium text-[#f5f5f1] transition-colors hover:text-[#b3b3b0]" to="/">
            TV Shows
          </Link>

          <Link className="whitespace-nowrap text-sm font-medium text-[#f5f5f1] transition-colors hover:text-[#b3b3b0]" to="/">
            Movies
          </Link>

          <Link className="whitespace-nowrap text-sm font-medium text-[#f5f5f1] transition-colors hover:text-[#b3b3b0]" to="/">
            New & Popular
          </Link>

          <Link className="whitespace-nowrap text-sm font-medium text-[#f5f5f1] transition-colors hover:text-[#b3b3b0]" to="/">
            My List
          </Link>

          <Link className="whitespace-nowrap text-sm font-medium text-[#f5f5f1] transition-colors hover:text-[#b3b3b0] xl:block" to="/">
            Browse in your language
          </Link>
        </nav>

        {/* Right Section */}
        <div className="ml-auto flex shrink-0 items-center gap-3 text-[#f5f5f1] sm:gap-5">

          {/* Search */}
          <div className="relative flex items-center gap-2">
            {searchOpen && (
              <input
                type="text"
                placeholder="Movie title"
                aria-label="Search movies"
                autoFocus
                className="w-32 rounded border border-[#808080] bg-black/50 px-3 py-2 text-sm text-white outline-none placeholder:text-[#b3b3b0] focus:border-white sm:w-[200px]"
              />
            )}

            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center justify-center rounded p-1 transition-colors hover:text-gray-300"
              aria-label="Toggle search"
              aria-expanded={searchOpen}
            >
              <Search size={20} />
            </button>
          </div>

          {/* Notifications */}
          <button
            type="button"
            className="relative flex items-center justify-center rounded p-1 transition-colors hover:text-gray-300"
            aria-label="Notifications: 4"
          >
            <Bell size={20} />
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#e50914] px-1 text-[10px] font-bold text-white">
              4
            </span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 rounded p-1 transition-colors hover:bg-white/10"
              aria-expanded={profileOpen}
              aria-label="Toggle profile menu"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#564d4d] text-white">
                <User size={20} />
              </span>

              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[180px] animate-[slideDown_200ms_ease-out] rounded border border-[#404040] bg-black/95 py-2 shadow-xl">
                <Link
                  className="block px-4 py-3 text-sm text-[#f5f5f1] no-underline transition-colors hover:bg-white/10"
                  to="/account"
                >
                  Account
                </Link>

                <Link
                  className="block px-4 py-3 text-sm text-[#f5f5f1] no-underline transition-colors hover:bg-white/10"
                  to="/help"
                >
                  Help Center
                </Link>

                <hr className="my-2 border-0 border-t border-[#404040]" />

                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left text-sm text-[#f5f5f1] transition-colors hover:bg-white/10"
                  onClick={() => setProfileOpen(false)}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
