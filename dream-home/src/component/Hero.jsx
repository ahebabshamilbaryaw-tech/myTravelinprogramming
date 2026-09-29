import heroImage from '../assets/images/hero-image.png'
import { FiMapPin, FiHome, FiDollarSign } from 'react-icons/fi'
function Hero() {
  return (
    <section className="relative min-h-[650px] bg-[#fdf6f0] px-16 pt-16">
      <div className="w-1/2 pt-16">
        <h1 className="text-6xl font-bold leading-tight text-[#2b211c]">
          Find Your
          <br />
          Dream Home
        </h1>
        <p className="mt-6 max-w-md text-sm leading-6 text-[#4f4641]">
          Explore our curated selection of exquisite
          <br />
          properties meticulously tailored to your
          <br />
          unique dream home vision
        </p>
        <button className="mt-8 rounded-md bg-[#2b211c] px-7 py-3 text-sm text-white">
          Sign up
        </button>
      </div>
      <div className="absolute right-0 top-20 w-[58%]">
        <img
          src={heroImage}
          alt="Dream Home"
          className="h-[500px] w-full object-cover object-center"
        />
      </div>
{/* Search / Filter Box */}
<div className="absolute bottom-[-35px] left-1/2 flex w-[73%] -translate-x-1/2 items-center gap-3 rounded-2xl bg-[#ddc7ba] p-5 shadow-lg">        <div className="flex flex-1 items-center rounded-md bg-[#fffaf7] px-4 py-3">
          <span className="mr-3 text-[#6b5a50]">
            <FiMapPin />
          </span>
          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
{/* Location */}
<div className="flex flex-1 items-center rounded-md bg-[#fdf5ef] px-4 py-3">          <span className="mr-3 text-[#6b5a50]">
            <FiHome />
          </span>
          <input
            type="text"
            placeholder="Type"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
        <div className="flex flex-1 items-center rounded-md bg-[#fffaf7] px-4 py-3">
          <span className="mr-3 text-[#6b5a50]">
            <FiDollarSign />
          </span>
          <input
            type="text"
            placeholder="Price Range"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
        <button className="rounded-md bg-[#2b211c] px-8 py-3 text-sm text-white">
          Sign up
        </button>
      </div>
    </section>)}
export default Hero
