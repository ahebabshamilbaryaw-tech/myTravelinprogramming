import aboutImage from '../assets/images/about-img.png'
function About() {
  return (
    <section className="px-16 py-24">
      <div className="flex items-center gap-14">
        <div className="w-1/2">
          <img
            src={aboutImage}
            alt="Dream Home"
            className="h-[320px] w-full rounded-xl object-cover"
          />
        </div>
        <div className="w-1/2">

          <h2 className="text-4xl font-bold leading-tight text-[#2b211c]">
            We Help You To Find
            <br />
            Your Dream Home
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-6 text-[#4f4641]">
            From cozy cottages to luxurious estates, our
            dedicated team guides you through every step of the
            journey, ensuring your dream home becomes a reality.
          </p>
          <div className="mt-8 flex gap-12">
            <div>
              <h3 className="text-3xl font-bold text-[#2b211c]">
                8K+
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Houses Available
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#2b211c]">
                6K+
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Houses Sold
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#2b211c]">
                2K+
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Trusted Agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>)}
export default About