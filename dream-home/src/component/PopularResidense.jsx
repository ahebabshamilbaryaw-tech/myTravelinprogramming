import { FiMapPin } from 'react-icons/fi'
import { IoBedOutline } from 'react-icons/io5'
import { BiArea } from 'react-icons/bi'
import Image1 from '../assets/images/popularResidence/img-1.png'
import Image2 from '../assets/images/popularResidence/img-2.png'
import Image3 from '../assets/images/popularResidence/img-3.png'

function PopularResidence() {
  return (
    <section className="bg-white px-16 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#1f1f1f]">
          Our Popular Residence
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="overflow-hidden rounded-2xl bg-[#e3d3c4] shadow-md">
          <img
            src={Image1}
            alt="San Francisco, California"
            className="h-56 w-full object-cover"
          />

          <div className="p-5 text-[#2b211c]">
            <div className="flex items-center gap-2 text-sm font-bold">
              <FiMapPin className="text-black" />
              <span>San Francisco, California</span>
            </div>

            <div className="mt-4 flex items-center gap-6 text-xs text-gray-800">
              <div className="flex items-center gap-1.5">
                <IoBedOutline className="text-base" />
                <span>4 Rooms</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BiArea className="text-base" />
                <span>3,500 sq ft</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button className="rounded-lg bg-[#1c1917] px-4 py-1.5 text-xs font-semibold text-white">
                Sign up
              </button>
              <p className="text-base font-bold text-[#1c1917]">
                $2,500,000
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-[#e3d3c4] shadow-md">
          <img
            src={Image2}
            alt="Beverly Hills, California"
            className="h-56 w-full object-cover"
          />
          <div className="p-5 text-[#2b211c]">
            <div className="flex items-center gap-2 text-sm font-bold">
              <FiMapPin className="text-black" />
              <span>Beverly Hills, California</span>
            </div>
            <div className="mt-4 flex items-center gap-6 text-xs text-gray-800">
              <div className="flex items-center gap-1.5">
                <IoBedOutline className="text-base" />
                <span>3 Rooms</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BiArea className="text-base" />
                <span>1,500 sq ft</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button className="rounded-lg bg-[#1c1917] px-4 py-1.5 text-xs font-semibold text-white">
                Sign up
              </button>
              <p className="text-base font-bold text-[#1c1917]">
                $850,000
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-[#e3d3c4] shadow-md">
          <img
            src={Image3}
            alt="Palo Alto, California"
            className="h-56 w-full object-cover"
          />
          <div className="p-5 text-[#2b211c]">
            <div className="flex items-center gap-2 text-sm font-bold">
              <FiMapPin className="text-black" />
              <span>Palo Alto, California</span>
            </div>
            <div className="mt-4 flex items-center gap-6 text-xs text-gray-800">
              <div className="flex items-center gap-1.5">
                <IoBedOutline className="text-base" />
                <span>6 Rooms</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BiArea className="text-base" />
                <span>4,000 sq ft</span>
              </div>
            </div>
<div className="mt-6 flex items-center justify-between">
              <button className="rounded-lg bg-[#1c1917] px-4 py-1.5 text-xs font-semibold text-white">
                Sign up
              </button>
              <p className="text-base font-bold text-[#1c1917]">
                $3,700,000
              </p></div></div></div></div></section>)}

export default PopularResidence