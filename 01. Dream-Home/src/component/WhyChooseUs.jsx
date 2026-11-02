import { FiMapPin,FiUserCheck, FiClipboard,FiHeart} from 'react-icons/fi'
function WhyChooseUs() {
  return (
    <section className="px-16 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#2b211c]">
          Why Choose Us
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#6b5a50]">
          Elevating Your Home Buying Experience with Expertise,
          Integrity, and Unmatched Personalized Service
        </p>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5">
        <div className="rounded-xl bg-[#ddc7ba] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#fdf5ef]">
            <FiMapPin className="text-xl text-[#2b211c]" />
          </div>
          <h3 className="mt-5 font-semibold text-[#2b211c]">
            Expert Guidance
          </h3>
          <p className="mt-2 text-xs leading-5 text-[#5f514a]">
            Benefit from our team's seasoned expertise for a smooth buying experience.
          </p>
        </div>
        <div className="rounded-xl bg-[#ddc7ba] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#fdf5ef]">
            <FiUserCheck className="text-xl text-[#2b211c]" />
          </div>
          <h3 className="mt-5 font-semibold text-[#2b211c]">
            Personalized Service
          </h3>
          <p className="mt-2 text-xs leading-5 text-[#5f514a]">
            Our services adapt to your unique needs, making your journey stress-free.
          </p>
        </div>
        <div className="rounded-xl bg-[#ddc7ba] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#fdf5ef]">
            <FiClipboard className="text-xl text-[#2b211c]" />
          </div>
          <h3 className="mt-5 font-semibold text-[#2b211c]">
            Transparent Process
          </h3>
          <p className="mt-2 text-xs leading-5 text-[#5f514a]">
            Stay informed with our clear and honest approach to buying your home.
          </p>
        </div>
        <div className="rounded-xl bg-[#ddc7ba] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#fdf5ef]">
            <FiHeart className="text-xl text-[#2b211c]" />
          </div>
          <h3 className="mt-5 font-semibold text-[#2b211c]">
            Exceptional Support
          </h3>
          <p className="mt-2 text-xs leading-5 text-[#5f514a]">
            Providing peace of mind with our responsive and attentive customer service.
          </p>
        </div>
      </div>
    </section>)}

export default WhyChooseUs