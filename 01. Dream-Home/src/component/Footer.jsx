import { FiCheckCircle, FiMail } from 'react-icons/fi'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <footer className="w-full">
      {/* 1. Newsletter / Question Section */}
      <div className="bg-white px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#2b211c] md:text-4xl">
          Do You Have Any Questions?
          <br />
          Get Help From Us
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-[#2b211c]">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-base text-[#2b211c]" />
            <span>Chat live with our support team</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-base text-[#2b211c]" />
            <span>Browse our FAQ</span>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-md items-center gap-3">
          <div className="relative flex-1">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full rounded-xl bg-[#e8d7c8] py-3 pl-10 pr-4 text-xs text-[#2b211c] placeholder-gray-600 focus:outline-none"
            />
          </div>
          <button className="rounded-xl bg-[#2b211c] px-6 py-3 text-xs font-semibold text-white transition hover:bg-black">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-[#e8d7c8] px-8 py-12 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
                    <div className="md:col-span-1">
            <h3 className="text-xl font-extrabold text-[#2b211c]">
              Dwello
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-[#4f4641]">
              Bringing you closer to your dream home, one click at a time.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#2b211c]">About</h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium text-[#4f4641]">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#2b211c]">Support</h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium text-[#4f4641]">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#2b211c]">Find Us</h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium text-[#4f4641]">
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Locations</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#2b211c]">Our Social</h4>
            <ul className="mt-4 space-y-3 text-xs font-medium text-[#4f4641]">
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <FaInstagram className="text-sm" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <FaFacebookF className="text-sm" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <FaTwitter className="text-sm" />
                  <span>Twitter (x)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
export default Footer