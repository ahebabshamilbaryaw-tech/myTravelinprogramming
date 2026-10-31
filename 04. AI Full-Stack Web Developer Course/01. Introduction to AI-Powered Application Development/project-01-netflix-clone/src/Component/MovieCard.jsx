
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  const genres = movie?.genres || ["Adventure", "Action", "Thriller"];

  return (
    <div className="group relative z-10 h-[198px] w-[290px] cursor-pointer overflow-visible transition-transform duration-300 hover:z-50">
      {/* Movie Poster */}
      <img
        className="relative z-[2] h-[128px] w-[227px] rounded-md object-cover"
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt={movie?.title || movie?.name || "Movie poster"}
      />

      {/* Hover Card */}
      <div className="invisible absolute left-1/2 top-[-50px] z-[999] min-h-[305px] w-[320px] -translate-x-1/2 scale-95 overflow-visible rounded-lg bg-[#111] opacity-0 shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
        
        {/* Hover Image */}
        <img
          className="h-[130px] w-full rounded-t-lg object-cover"
          src={`${IMAGE_BASE}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title || movie?.name || "Movie preview"}
        />

        {/* Badge */}
        <div className="ml-3 mt-2 inline-block rounded bg-red-600 px-2 py-1 text-xs font-medium text-white">
          {movie?.badge || "Recently added"}
        </div>

        {/* Action Buttons */}
        <div className="m-3 flex items-center gap-2">
          <FaCirclePlay className="cursor-pointer text-white transition-transform hover:scale-110" size={40} />

          <BsPlusCircle className="cursor-pointer text-white transition-transform hover:scale-110" size={40} />

          <GoCheckCircleFill className="cursor-pointer text-white transition-transform hover:scale-110" size={40} />

          <IoIosArrowDropdownCircle className="ml-auto cursor-pointer rounded-full border border-[#555] bg-[#222]/80 text-white transition-colors hover:border-[#777] hover:bg-[#333]" size={40} />
        </div>

        {/* Movie Metadata */}
        <div className="mx-3 my-2 flex gap-2 text-sm font-medium text-white">
          <span className="text-gray-300">
            {movie?.matureRating || "U/A 16+"}
          </span>

          <span className="text-gray-300">
            {movie?.category || "Movie"}
          </span>

          <span className="text-gray-300">
            {movie?.quality || "HD"}
          </span>
        </div>

        {/* Genres */}
        <div className="mx-3 mb-3 mt-1 text-[13px] leading-relaxed text-gray-400">
          {genres.map((genre, index) => (
            <span key={index}>
              {genre}
              {index < genres.length - 1 && (
                <span className="mx-1 text-gray-500">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
