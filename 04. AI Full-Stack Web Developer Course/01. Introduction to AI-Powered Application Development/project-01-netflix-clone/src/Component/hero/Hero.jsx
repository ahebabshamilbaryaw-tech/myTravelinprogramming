
import { FiPlay, FiInfo } from "react-icons/fi";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-gray-900 px-6 pt-32 md:px-12">
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Netflix Originals
        </h1>

        <p className="mb-6 max-w-xl text-sm leading-relaxed text-white md:text-lg">
          Discover exciting stories, unforgettable characters, and amazing
          entertainment. Your next favorite show starts here.
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-300">
            <FiPlay size={20} />
            Play
          </button>

          <button className="flex items-center gap-2 rounded-md bg-gray-500/80 px-6 py-3 font-semibold text-white transition hover:bg-gray-500">
            <FiInfo size={20} />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
