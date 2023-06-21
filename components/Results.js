/** @format */

import { useRouter } from "next/dist/client/router";

function Results({ result }) {
  const router = useRouter();
  const baseURL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="mt-2 flex flex-wrap px-6">
      {result.results.map((movie) => (
        <div
          key={movie}
          onClick={() => router.push(`/movie/${movie.id}`)}
          className="group px-2 hover:scale-105 hover:z-50 transition duration-150 w-1/3 sm:w-1/2 xs:w-full">
          <img
            src={
              `${baseURL}/${movie.backdrop_path}` ||
              `${baseURL}/${movie.poster_path}`
            }
            alt=""
            className="py-2 px-43 group-hover:cursor-pointer group-hover:opacity-20 w-full h-auto object-cover"
          />
          <div className="hidden group-hover:block text-white font-bold -mt-36 mx-auto">
            <p className="text-center text-2xl sm:text-base">
              {movie.original_title || movie.original_name}
            </p>
            <p className="text-center text-xl sm:text-sm">
              ⭐ {movie.vote_average}
            </p>
            {movie.release_date && (
              <p className="text-center text-xl sm:text-sm">
                Released : {movie.release_date}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
// {
//     "original_language": "en",
//     "original_title": "Vacation Friends",
//     "poster_path": "/uTgZuqUQbaCB6Wfk03N8IUEuzQf.jpg",
//     "id": 653349,
//     "video": false,
//     "vote_average": 7.6,
//     "overview": "When a straight-laced couple that has fun with a rowdy couple on vacation in Mexico return to the States, they discover that the crazy couple they met in Mexico followed them back home and decide to play tricks on them.",
//     "release_date": "2021-08-27",
//     "vote_count": 63,
//     "adult": false,
//     "backdrop_path": "/o0UGl6icA4DbhmDNgdZ5AWvuTtM.jpg",
//     "title": "Vacation Friends",
//     "genre_ids": [
//         35
//     ],
//     "popularity": 133.141,
//     "media_type": "movie"
// }
