const { REACT_APP_APIKEY } = process.env;

const consumeListMoviesAndSeries = async (
  textSearch,
  typeSearch,
  pageSearch = 1
) => {
  const data = await fetch(
    `http://www.omdbapi.com/?s=${textSearch}&type=${typeSearch}&apikey=${REACT_APP_APIKEY}&page=${pageSearch}`
  );
  const dataJson = await data.json();
  return dataJson;
};

const consumeByIdMovieOrSerie = async (id) => {
  const data = await fetch(
    `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${REACT_APP_APIKEY}`
  );
  const dataJson = await data.json();
  return dataJson;
};

export { consumeListMoviesAndSeries, consumeByIdMovieOrSerie };
