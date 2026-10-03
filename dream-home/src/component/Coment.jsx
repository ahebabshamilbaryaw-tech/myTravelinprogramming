import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import House1 from '../assets/images/comment-Images/img-1.png'
import House2 from '../assets/images/comment-Images/img-2.png'
import House3 from '../assets/images/comment-Images/img-3.png'
import Profile1 from '../assets/images/comment-Images/profile/profile-1.png'
import Profile2 from '../assets/images/comment-Images/profile/profile-2.png'
import Profile3 from '../assets/images/comment-Images/profile/profile-3.png'


function Coment() {
  return (
    <section className="bg-[#fdf8f4] px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight text-[#2b211c]">
          What People Say
          <br />
          About Dwello
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <div className="overflow-hidden rounded-2xl bg-[#e3d3c4] shadow-md">
          <img
            src={House1}
            alt="House"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={Profile1}
                  alt="Sarah Nguyen"
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold text-[#2b211c]">
                    Sarah Nguyen
                  </h3>

                  <p className="text-xs text-[#5f514a]">
                    San Francisco
                  </p>
                </div>

              </div>
              <div className="flex items-center gap-1 rounded bg-white px-2 py-1 text-xs text-[#2b211c]">
                <span>★</span>
                <span>5.0</span>
              </div>

            </div>
            <p className="mt-4 text-xs leading-5 text-[#4f4641]">
              Dwello truly cares about their clients.
              They listened to my needs and preferences
              and helped me find the perfect home in the Bay Area.
              Their professionalism and attention to detail are unmatched.
            </p>

          </div>

        </div>
        <div className="overflow-hidden rounded-2xl bg-[#e3d3c4] shadow-md">
          <img
            src={House2}
            alt="House"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                <img
                  src={Profile2}
                  alt="Michael Rodriguez"
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold text-[#2b211c]">
                    Michael Rodriguez
                  </h3>

                  <p className="text-xs text-[#5f514a]">
                    San Diego
                  </p>
                </div>

              </div>
              <div className="flex items-center gap-1 rounded bg-white px-2 py-1 text-xs text-[#2b211c]">
                <span>★</span>
                <span>4.5</span>
              </div>

            </div>
            <p className="mt-4 text-xs leading-5 text-[#4f4641]">
              I had a fantastic experience working with Dwello.
              Their expertise and personalized service exceeded my
              expectations. I found my dream home quickly and smoothly.
              Highly recommended!
            </p>

          </div>

        </div>
        <div className="overflow-hidden rounded-2xl bg-[#e3d3c4] shadow-md">
          <img
            src={House3}
            alt="House"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={Profile3}
                  alt="Emily Johnson"
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold text-[#2b211c]">
                    Emily Johnson
                  </h3>

                  <p className="text-xs text-[#5f514a]">
                    Los Angeles
                  </p>
                </div>

              </div>
              <div className="flex items-center gap-1 rounded bg-white px-2 py-1 text-xs text-[#2b211c]">
                <span>★</span>
                <span>5.0</span>
              </div>

            </div>
            <p className="mt-4 text-xs leading-5 text-[#4f4641]">
              Dwello made my dream of owning a home a reality!
              Their team provided exceptional support and guided me
              through every step of the process. I couldn't be happier
              with my new home!
            </p>

          </div>

        </div>

      </div>
      <div className="mt-8 flex justify-center gap-4">

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b211c] text-white">
          <FiChevronLeft />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b211c] text-white">
          <FiChevronRight />
        </button>

      </div>

    </section>
  )
}


export default Coment