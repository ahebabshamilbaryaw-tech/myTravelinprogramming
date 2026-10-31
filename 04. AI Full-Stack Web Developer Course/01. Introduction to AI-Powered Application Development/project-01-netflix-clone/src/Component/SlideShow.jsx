import MovieCard from "./MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function SlideShow({ title, movies = [] }) {
  return (
    <section className="mb-8">

      {/* Section Title */}
      <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">
        {title}
      </h2>

      {/* Movie Slider */}
      <div
        className="
          relative
          [&_.swiper]:h-[265px]
          [&_.swiper]:px-[50px]
          [&_.swiper-slide]:flex
          [&_.swiper-slide]:h-full
          [&_.swiper-slide]:items-center
          [&_.swiper-button-prev]:text-white
          [&_.swiper-button-next]:text-white
          [&_.swiper-button-prev]:after:text-sm
          [&_.swiper-button-next]:after:text-sm
        "
      >
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.8}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5.8,
              spaceBetween: 10,
            },
          }}
        >
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SlideShow;