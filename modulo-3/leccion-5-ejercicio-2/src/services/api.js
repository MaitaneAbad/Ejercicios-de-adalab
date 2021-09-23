// Fichero src/services/api.js
const callToApi = (inputValue) => {
  return fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((serie) => {
        return {
          name: serie.show.name,
        };
      });
      return result;
    });
};

export default callToApi;
