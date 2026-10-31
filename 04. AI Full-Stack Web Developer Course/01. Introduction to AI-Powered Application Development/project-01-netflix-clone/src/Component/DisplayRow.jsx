
import { useEffect, useState } from "react";
import SlideShow from "./SlideShow";
import { movieInstance } from "../Utility/MovieInstance";
import requests from "../Utility/requestUrls";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOrginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    docmuntaries: [],
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieRequests = [
      ["trending", requests.fetchTrending],
      ["netflixOrginals", requests.fetchNetflixOriginals],
      ["topRated", requests.fetchTopRatedMovies],
      ["action", requests.fetchActionMovies],
      ["comedy", requests.fetchComedyMovies],
      ["horror", requests.fetchHorrorMovies],
      ["romance", requests.fetchRomanceMovies],
      ["docmuntaries", requests.fetchDocumentaries],
    ];

    movieRequests.forEach(async ([key, url]) => {
      try {
        if (!url) {
          console.error(`Missing API URL for: ${key}`);
          return;
        }

        const response = await movieInstance.get(url);

        setMovies((previousMovies) => ({
          ...previousMovies,
          [key]: response.data.results || [],
        }));
      } catch (error) {
        console.error(`Error fetching ${key}:`, error.response?.status, error.message);
      }
    });
  };

  return (
    <div className="min-h-screen bg-black pl-[2%] pt-[15px]">
      <SlideShow
        title="Netflix Trending"
        movies={movies.trending}
      />

      <SlideShow
        title="Popular on Netflix"
        movies={movies.netflixOrginals}
      />

      <SlideShow
        title="Actions"
        movies={movies.action}
      />

      <SlideShow
        title="Top Rated"
        movies={movies.topRated}
      />
    </div>
  );
}

export default DisplayRow;
