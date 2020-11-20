export const SEARCH_MIN_LENGTH = 2;

export const SEARCH_MAX_LENGTH = 250;

export const isValidSearch = (search) =>
  Boolean(
    search &&
      search.trim() &&
      search.trim().length >= SEARCH_MIN_LENGTH &&
      search.trim().length <= SEARCH_MAX_LENGTH
  );
