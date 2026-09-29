import hero from '../assets/images/hero-image.png'

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

     
      
       <div>
         <img
           src={hero}
           alt="Dwello"
           className="w-100"
         />
      </div>
    </section>
  )
}

export default Hero