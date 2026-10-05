
import profileImage from "../assets/images/Wahid-profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#292846]">
      <div className="flex flex-col items-center">
        <div className="w-56 h-56 rounded-full border-4 border-cyan-400 overflow-hidden bg-green-500">
          <img
            src={profileImage}
            alt="Wahid Ahmed"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-6 text-4xl font-bold text-white">
          WAHID AHMED
        </h1>
        <p className="mt-6 text-4xl  text-white">I Am Web Designer and video Editor</p>

      </div>
    </section>
  );
}

export default Hero;
