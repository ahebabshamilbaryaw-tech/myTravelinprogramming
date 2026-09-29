function Hero() {
  return (
    <section className="flex items-center justify-between px-10 py-16">

      {/* Text */}
      <div className="w-1/2">
        <h1 className="text-6xl font-bold leading-tight">
          Find Your Dream Home
        </h1>

        <p className="mt-6 font-bold ">
          Exploreour curated selecttion of exquisite properties meticulously tailored to your unique dream home vision
        </p>
      </div>

      {/* Image */}
      <div className="w-1/2">
        <img
 src="/images/hero-house.jpg"
          alt="Dream Home"
          className="w-full rounded-2xl"/>
      </div>
    </section>
  )
}

export default Hero