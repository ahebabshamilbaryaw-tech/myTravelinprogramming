import profileImage from "../assets/images/Wahid-profile.jpg";
import {
  FaYoutube,FaTwitter,FaInstagram,FaFacebookF,FaGithub,
} from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#292846]">
      <div className="flex flex-col items-center">
        <div className="w-56 h-56 rounded-full border-4 border-cyan-400 overflow-hidden bg-green-500">
          <img
            src={profileImage} alt="Wahid Ahmed"  className="w-full h-full object-cover" />
        </div>
        <h1 className="mt-6 text-4xl font-bold text-white">
          WAHID AHMED
        </h1>
        <p className="mt-4 text-2xl text-white">I Am Web Designer and video Editor</p>
        <div className="flex gap-4 mt-6">
          <a className="w-11 h-11 flex items-center justify-center rounded-md bg-cyan-400 text-[#292846] text-2xl">
            <FaYoutube />
          </a>
          <a className="w-11 h-11 flex items-center justify-center rounded-md bg-cyan-400 text-[#292846] text-2xl">
            <FaTwitter />
          </a>
          <a className="w-11 h-11 flex items-center justify-center rounded-md bg-cyan-400 text-[#292846] text-2xl">
            <FaInstagram />
          </a>
          <a className="w-11 h-11 flex items-center justify-center rounded-md bg-cyan-400 text-[#292846] text-2xl">
            <FaFacebookF />
          </a>
          <a className="w-11 h-11 flex items-center justify-center rounded-md bg-cyan-400 text-[#292846] text-2xl">
            <FaGithub />
          </a>
        </div>
 <div className="flex flex-col items-center mt-8 text-white">
<div className="mt-2 w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center">
  <FiArrowDown className="text-cyan-400 text-xl" />
</div>    <span className="text-sm tracking-widest">Scroll Down</span>

</div>

      </div>
    </section>
  );
}

export default Hero;
