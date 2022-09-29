const _checkIncludes = (el, searchRequest) => {
  const nameRUIncludes = el.nameRU
    ?.toLowerCase()
    .includes(searchRequest?.toLowerCase());
  const nameENIncludes = el.nameEN
    ?.toLowerCase()
    .includes(searchRequest?.toLowerCase());
  const descriptionIncludes = el.nameRU
    ?.toLowerCase()
    .includes(searchRequest?.toLowerCase());
  return nameRUIncludes || nameENIncludes || descriptionIncludes;
};

export const searchMovies = (allMovies, searchRequest) => {
  return allMovies.filter((el) => {
    return _checkIncludes(el, searchRequest);
  });
};

export const filterShortsMovies = (filteredMovies, isShortChecked) => {
  return filteredMovies.filter((el) => {
    return el.duration <= 40;
  });
};
