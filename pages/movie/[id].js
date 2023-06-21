/** @format */

function Movie({ movieData }) {
  const baseURL = "https://image.tmdb.org/t/p/original";
  console.log(movieData);
  return (
    <div className="bg-backgroundColor w-screen h-screen">
      <img
        src={
          `${baseURL}/${movieData.backdrop_path}` ||
          `${baseURL}/${movieData.poster_path}`
        }
        alt=""
        className="h-96 w-auto p-2 mx-auto xs:h-56"
      />
      <p className="text-center text-4xl sm:text-2xl xs:text-2xl text-white mt-4 font-bold">
        {movieData.original_title || movieData.original_name}
      </p>
      {movieData.tagline && (
        <p className="text-center text-2xl sm:text-xl xs:text-xl text-white font-bold">
          ({movieData.tagline})
        </p>
      )}
      <p className="text-center text-3xl sm:text-xl xs:text-xl text-white mt-4 font-bold">
        <span className="underline italic">Produced by</span> :{" "}
        {movieData.production_companies.map((p) => (
          <span>{p.name} </span>
        ))}
      </p>
      <p className="text-justify mt-6 text-white text-xl px-3 italic">
        {movieData.overview}
      </p>
      <p className="text-justify mt-6 text-white text-xl px-3 italic">
        <span className="italic underline">Runtime </span> : {movieData.runtime}{" "}
        minutes
      </p>
    </div>
  );
}

export default Movie;
export async function getServerSideProps(context) {
  const key = process.env.TMDB_API_KEY;
  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${key}&language=en-US`
  ).then((res) => res.json());
  return {
    props: {
      movieData: movieDetails,
    },
  };
}
