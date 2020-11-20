import Search from "./model";

const save = (string) =>
  new Promise((resolve, reject) => {
    const cleanString = string
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

    const newSearch = new Search({ string: cleanString });

    // Search bank is a non-critical feature, as such,
    // it doesn't matter if the save was successful or not.

    newSearch.save(() => resolve());
  });

export default save;
