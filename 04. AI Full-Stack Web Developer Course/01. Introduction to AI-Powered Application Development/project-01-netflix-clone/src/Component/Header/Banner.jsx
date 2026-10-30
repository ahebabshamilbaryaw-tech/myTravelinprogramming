
import { useEffect, useState } from "react";
import NeflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";

import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      try {
        const request = await movieInstance.get(
          requests.fetchNetflixOriginals
        );

        const results = request.data.results;

        if (results && results.length > 0) {
          setBannerImage(
            results[Math.floor(Math.random() * results.length)]
          );
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    }

    fetchBannerImage();
  }, []);

  function truncate(str, n) {
    return str?.length > n
      ? str.substring(0, n - 1) + "..."
      : str;
  }

  return (
    <section
      className="relative min-h-[85vh] w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: bannerImage?.backdrop_path
          ? `url("${BANNER_BASE}${bannerImage.backdrop_path}")`
          : "none",
      }}
    >
      {/* Banner Content */}
      <div className="relative z-10 px-4 pt-[280px] pb-16 md:px-12 md:pt-[330px]">

        {/* Netflix Logo */}
        <img
          className="mb-4 w-[150px] object-contain"
          src={NeflixBannerLogo}
          alt="Netflix Banner Logo"
        />

        {/* Movie Title */}
        <h1 className="mb-3 text-4xl font-extrabold md:text-6xl">
          {bannerImage?.original_name}
        </h1>

        {/* Movie Description */}
        <p className="mb-6 max-h-20 max-w-[760px] overflow-hidden text-base leading-relaxed md:text-xl">
          {truncate(bannerImage?.overview, 120)}
        </p>

        {/* Buttons */}
        <div className="mb-4 flex flex-wrap gap-4">

          <button className="flex items-center gap-2 rounded px-6 py-2 font-bold text-black transition duration-200 hover:bg-gray-300">
            <Play size={24} />
            Play
          </button>

          <button className="flex items-center gap-2 rounded bg-gray-500/80 px-6 py-2 font-bold text-white transition duration-200 hover:bg-gray-600">
            <Info size={24} />
            My List
          </button>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 h-44 w-full bg-gradient-to-b from-transparent via-[#252525]/60 to-[#111]" />
    </section>
  );
}

export default Banner;
